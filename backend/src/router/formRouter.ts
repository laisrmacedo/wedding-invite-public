import express from "express"
import { FormBusiness } from "../business/FormBusiness"
import { FormController } from "../controller/FormController"
import { FormDatabase } from "../database/FormDatabase"

export const formRouter = express.Router()

const formController = new FormController(
  new FormBusiness(
    new FormDatabase()
  )
)

formRouter.get("/", formController.getGuests)