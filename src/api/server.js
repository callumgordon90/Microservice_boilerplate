import express, { Application } from 'express'
import cors from 'cors'
import { smartRoutingRouter, smartRoutingRouter2 } from '../routes'
import { initializeTasks } from '../subscribers'
import { DataSource } from 'typeorm'
import db from '../database/db'

class Server {
  private readonly _app: Application
  private readonly _port: string
  private _routes: { [x: string]: string }
  private _connection: any
  public db: DataSource

  get instance(): Application {
    return this._app
  }

  constructor() {
    this._app = express()
    this._port = process.env.PORT || '4000'
    this.middlewares()

    this.db = db

    this.middlewares()

    this.routes()
  }

  middlewares() {
    this._app.use(express.json())
    this._app.use(cors())
  }

  routes() {
    this._app.use('/api/voip', smartRoutingRouter)
  }

  listen() {
    process.env.USE_CRON_TASKS === '1' && initializeTasks()

    this._connection = this._app.listen(this._port, () => {
      console.log(`Smart routing listening on port ${this._port}`)
    })
  }
}

export default new Server()


//this is the server file
// this file imports: cors, db, typeorm and express. These dependencies allow conntection and http comminication between everything
// this file mounts the route(s) which mount controller which mount services which connect to db
// this file collects everything to ringover
//this file is the anchor of everything