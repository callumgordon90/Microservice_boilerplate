import { Response, Request } from 'express'
import db from '../../src/api/db.js'
import { TypedRequest, TypedResponse } from '../../interfaces'
import { Employee, Family } from 'src/api/models'





// Main work

// 1. Create number

const createNumber = async (req, res) => {
    let info = {
        {
            "event": "ringing",
            "resource": "call",
            "timestamp": 1554823493.762305,
            "data": {
              "id": "57622f20-a020-4f9e-814c-62a6123412fa",
              "call_id": 1234567890987654400,
              "channel_id": 123456789,
              "start_time": 1554823493.762305,
              "direction": "inbound",
              "from_number": "33601020304",
              "to_number": "33101020304",
              "user_id": 12854321,
              "is_internal": 1,
              "is_anonymous": 0,
              "is_ivr": 1,
              "ivr_data": {
                "number": "33101020304",
                "scenario_name": "Opened",
                "ivr_name": "myIVR"
              },
              "user": {
                "user_id": 123456789,
                "firstname": "Jean",
                "lastname": "Dupont",
                "email": "jean.dupont@ringover.com",
                "photo": "https://cdn.ringover.com/img/users/default.jpg"
              },
              "status": "ringing"
            },
            "attempt": 2
          }
    }
    const number = await Number.create(info)
    res.status(200).send(number)
    console.log(number)
}

// 2. check number





module.exports = {
    createNumber
    // checkNumber
}

// 3. export number 
export const number = async (req: Request, res: Response) => {
    const number = await db.getRepository(number).find();
  
    return res.json(number);
  }
  