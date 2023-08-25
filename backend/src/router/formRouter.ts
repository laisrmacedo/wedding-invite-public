import express from "express"
import { FormBusiness } from "../business/FormBusiness"
import { FormController } from "../controller/FormController"
import { FormDatabase } from "../database/FormDatabase"
import { GuestDTO } from "../dto/FormDTO"

export const formRouter = express.Router()

const formController = new FormController(
  new GuestDTO,
  new FormBusiness(
    new FormDatabase()
  )
)

formRouter.get("/", formController.getGuests)
formRouter.post("/new", formController.insertGuest)
formRouter.delete("/:id", formController.deleteGuest)