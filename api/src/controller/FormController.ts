import { Request, Response } from "express";
import { FormBusiness } from "../business/FormBusiness";
import { BaseError } from "../errors/BaseError";
import { GuestDTO } from "../dto/FormDTO";

export class FormController {
  constructor(
    private guestDTO: GuestDTO,
    private formBusiness: FormBusiness
  ){}

  public getGuests = async (req: Request, res: Response): Promise<void> => {
    try {
      const output = await this.formBusiness.getGuests()
      res.status(200).send(output)

    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
      } else {
        res.status(500).send("Unexpected error")
      }
    }
  }

  public insertGuest = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = this.guestDTO.insertGuestInputDTO(
        req.body.id,
        req.body.tickets
      )

      const output = await this.formBusiness.inserGuest(input)
      res.status(200).send(output)

    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
      } else {
        res.status(500).send("Unexpected error")
      }
    }
  }

  public deleteGuest = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = this.guestDTO.deleteGuestInputDTO(
        req.params.id
      )

      await this.formBusiness.deleteGuest(input)
      res.status(200).end()
  
    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
      } else {
        res.status(500).send("Unexpected error")
      }
    }
  }

  public editGuest = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = this.guestDTO.editGuestInputDTO(
        req.params.id,
        req.body.response,
        req.body.guestNames
      )

      await this.formBusiness.editGuest(input)
      res.status(200).end()

    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
      } else {
        res.send("Unexpected error")
      }
    }
  }
}