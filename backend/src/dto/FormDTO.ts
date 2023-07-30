import { BadRequestError } from "../errors/BadRequestError"

export interface RegistrationOutputDTO {
  name: string,
  email: string,
  cpf: string,
  phone: string
}

export interface GetFormsBetweenDatesOutputDTO {
  initial: string,
  final: string
}

export class FormDTO {
  public registrationInputDTO(
    name: unknown,
    email: unknown,
    cpf: unknown,
    phone: unknown
  ): RegistrationOutputDTO{

    if (!name ||  name === "") {
      throw new BadRequestError("ERROR: 'name' field is mandatory.")
    }
    if (typeof name !== "string") {
      throw new BadRequestError("ERROR: 'name' must be of type string.")
    }

    if (!email ||  email === "") {
      throw new BadRequestError("ERROR: 'email' field is mandatory.")
    }
    if (typeof email !== "string") {
      throw new BadRequestError("ERROR: 'email' must be of type string.")
    }

    if (!cpf ||  cpf === "") {
      throw new BadRequestError("ERROR: 'cpf' field is mandatory.")
    }
    if (typeof cpf !== "string") {
      throw new BadRequestError("ERROR: 'cpf' must be of type string.")
    }

    if (!phone ||  phone === "") {
      throw new BadRequestError("ERROR: 'phone' field is mandatory.")
    }
    if (typeof phone !== "string") {
      throw new BadRequestError("ERROR: 'phone' must be of type string.")
    }

    const dto: RegistrationOutputDTO = {
      name,
      email,
      cpf,
      phone
    }

    return dto
  }

  public getFormsBetweenDatesInputDTO(
    initial: string,
    final: string
  ):GetFormsBetweenDatesOutputDTO{
    
    const dto: GetFormsBetweenDatesOutputDTO = {
      initial,
      final
    }

    return dto
  }
}