import { BadRequestError } from "../errors/BadRequestError"

export interface InsertGuestOutputDTO {
  id: string,
  tickets: number
}

export interface DeleteGuestOutputDTO {
  idToDelete: string
}

export class GuestDTO {
  public insertGuestInputDTO(
    id: unknown,
    tickets: unknown
  ): InsertGuestOutputDTO{

    if (!id ||  id === "") {
      throw new BadRequestError("ERROR: 'id' field is mandatory.")
    }
    if (typeof id !== "string") {
      throw new BadRequestError("ERROR: 'id' must be of type string.")
    }

    if (!tickets ||  tickets === "") {
      throw new BadRequestError("ERROR: 'tickets' field is mandatory.")
    }
    if (typeof tickets !== "number") {
      throw new BadRequestError("ERROR: 'tickets' must be of type number.")
    }

    const dto = {
      id,
      tickets
    }

    return dto
  }

  public deleteGuestInputDTO(
    idToDelete: unknown
  ):DeleteGuestOutputDTO{

    if (!idToDelete ||  idToDelete === "") {
      throw new BadRequestError("ERROR: 'idToDelete' field is mandatory.")
    }
    if (typeof idToDelete !== "string") {
      throw new BadRequestError("ERROR: 'idToDelete' must be of type string.")
    }

    const dto = {
      idToDelete
    }

    return dto
  }
}