import { FormDatabase, FormDB } from "../database/FormDatabase";
import { GetFormsBetweenDatesOutputDTO, RegistrationOutputDTO } from "../dto/FormDTO";
import { BadRequestError } from "../errors/BadRequestError";
import { UnprocessableEntity } from "../errors/UnprocessableEntityError";

export class FormBusiness{
  constructor(
    private formDatabase: FormDatabase
  ){}

  public registration = async (input: RegistrationOutputDTO): Promise<void> => {
    const {name, email, cpf, phone} = input

    if (!email.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g)) {
      throw new BadRequestError("ERROR: 'email' must be like 'example@example.example'.")
    }

    const emailReplayCheck = await this.formDatabase.findByEmail(email)
    if(emailReplayCheck){
      throw new UnprocessableEntity("ERROR: 'email' already registered.")
    }

    const cpfReplayCheck = await this.formDatabase.findByCpf(cpf)
    if(cpfReplayCheck){
      throw new UnprocessableEntity("ERROR: 'cpf' already registered.")
    }

    if (cpf.length < 11 || !cpf.match(/[0-9]+$/g)) {
      throw new BadRequestError("ERROR: 'cpf' must be 11 numbers characters. Exemple: 00011122233")
    }

    if (phone.length < 11 || !phone.match(/\(\d{2,}\)\d{4,}\-\d{4}/g)) {
      throw new BadRequestError("ERROR: 'phone' must be 14 characters in format (00)99999-9999.")
    }

    const form = {
      name,
      email,
      cpf,
      phone
    }

    await this.formDatabase.insert(form)
  }

  public getFormsBetweenDates = async (input: GetFormsBetweenDatesOutputDTO): Promise<FormDB[] | string> => {
    const {initial, final} = input

    const output = await this.formDatabase.getByDate(initial, final)

    if(!output){
      return 'There is no registration in the requested date range.'
    }else{
      return output
    }
  }
}