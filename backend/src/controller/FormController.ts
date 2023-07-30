import { Request, Response } from "express";
import { FormBusiness } from "../business/FormBusiness";
import { FormDTO } from "../dto/FormDTO";
import { BaseError } from "../errors/BaseError";

export class FormController {
  constructor(
    private formDTO: FormDTO,
    private formBusiness: FormBusiness
  ){}

  public registration = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = this.formDTO.registrationInputDTO(
        req.body.name,
        req.body.email,
        req.body.cpf,
        req.body.phone
      )

      const output = await this.formBusiness.registration(input)
      res.status(201).send(output)

    } catch (error) {
      console.log(error)
      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
      } else {
        res.status(500).send("Unexpected error")
      }
    }
  }

  public getFormsBetweenDates = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = this.formDTO.getFormsBetweenDatesInputDTO(
        req.params.initial,
        req.params.final
      )

      const output = await this.formBusiness.getFormsBetweenDates(input)
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