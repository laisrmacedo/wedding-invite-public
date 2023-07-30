import { Request, Response } from "express";
import { FormBusiness } from "../business/FormBusiness";
import { BaseError } from "../errors/BaseError";

export class FormController {
  constructor(
    private formBusiness: FormBusiness
  ){}

  public getGuests = async (req: Request, res: Response): Promise<void> => {
    try {
      // const input = this.formDTO.getFormsBetweenDatesInputDTO(
      //   req.params.initial,
      //   req.params.final
      // )

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
}