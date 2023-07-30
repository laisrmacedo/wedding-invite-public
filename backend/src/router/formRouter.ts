import express from "express"
import { FormBusiness } from "../business/FormBusiness"
import { FormController } from "../controller/FormController"
import { FormDatabase } from "../database/FormDatabase"
import { FormDTO } from "../dto/FormDTO"

export const formRouter = express.Router()

const formController = new FormController(
  new FormDTO(),
  new FormBusiness(
    new FormDatabase()
  )
)

formRouter.post("/", formController.registration)
formRouter.get("/date/:initial/:final", formController.getFormsBetweenDates)