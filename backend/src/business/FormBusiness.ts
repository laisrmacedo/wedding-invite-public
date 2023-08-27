import { FormDatabase, GuestDB } from "../database/FormDatabase";
import { DeleteGuestOutputDTO, EditGuestOutputDTO, InsertGuestOutputDTO } from "../dto/FormDTO";
import { BadRequestError } from "../errors/BadRequestError";
import { NotFoundError } from "../errors/NotFoundError";
import { UnprocessableEntity } from "../errors/UnprocessableEntityError";
import { Guest } from "../model/Guest";

export interface GuestBusinessModel {
  id: string,
  tickets: number,
  createdAt: string,
  response: number | undefined,
  guestNames: string | null,
  repliedAt: string | undefined
}

export class FormBusiness{
  constructor(
    private formDatabase: FormDatabase
  ){}

  public getGuests = async () => {
    return await this.formDatabase.getGuests()
  }

  public inserGuest = async (input: InsertGuestOutputDTO): Promise <void> => {
    const {id, tickets} = input

    if (id.length < 5) {
      throw new BadRequestError("ERROR: 'id' must be at least 5 characters.")
    }
    if (tickets < 1) {
      throw new BadRequestError("ERROR: 'tickets' must be at least equal to 1.")
    }

    const foundId = await this.formDatabase.findGuestById(id)
    if (foundId) {
      throw new UnprocessableEntity("ERROR: 'id' already exists.")
    }

    const guestInstance = new Guest(
      id,
      tickets,
      new Date().toISOString(),
      undefined,
      null,
      undefined
    )

    await this.formDatabase.insertGuest(guestInstance.toDBModel())
  }

  public deleteGuest = async (input: DeleteGuestOutputDTO): Promise<void> => {
    const {idToDelete} = input

    const guestDB: GuestDB | undefined = await this.formDatabase.findGuestById(idToDelete)
    if(!guestDB){
      throw new NotFoundError("ERROR: 'idToDelete' not found.")
    }

    await this.formDatabase.deleteGuest(idToDelete)
  }

  public editGuest = async (input: EditGuestOutputDTO): Promise<void> => {
    const { idToEdit, response, guestNames } = input

    const foundGuest = await this.formDatabase.findGuestById(idToEdit)
    if(!foundGuest){
        throw new NotFoundError("ERROR: 'idToEdit' not found.")
    }

    const guestInstance = new Guest(
        foundGuest.id,
        foundGuest.tickets,
        foundGuest.created_at,
        foundGuest.response,
        foundGuest.guest_names,
        foundGuest.replied_at,
    )

    guestInstance.setResponse(response? 1 : 0)
    if(response && guestNames){
      guestInstance.setGuestNames(guestNames)
    }else{
      guestInstance.setGuestNames(null)
    }
    guestInstance.setRepliedAt(new Date().toISOString())

    const newGuest: GuestDB = {
        id: guestInstance.getId(), 
        tickets: guestInstance.getTickets(),
        created_at: guestInstance.getCreatedAt(),
        response: guestInstance.getResponse(), 
        guest_names: guestInstance.getGuestNames(),
        replied_at: guestInstance.getRepliedAt()
    }

    await this.formDatabase.updateGuest(idToEdit, newGuest)
  }
}