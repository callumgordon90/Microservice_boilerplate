import { Response, Request } from 'express'
import db from '../../src/api/db.js'
import { TypedRequest, TypedResponse } from '../../interfaces'
import { Employee, Family } from 'src/api/models'



const myRequest = new Request('info.json');


fetch("info.json")
.then((response) => {
  if (!response.ok) {
    throw new Error(`HTTP error, status = ${response.status}`);
  }
  return response.json();
})