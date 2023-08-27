import { GuestBusinessModel } from "../business/FormBusiness"
import { GuestDB } from "../database/FormDatabase"

export class Guest {
  constructor(
    private id: string, 
    private tickets: number,
    private createdAt: string, 
    private response: number | undefined,
    private guestNames: string | null,
    private repliedAt: string | undefined
  ){}

  public getId():string{
    return this.id
  }

  public getTickets():number{
    return this.tickets
  }

  public getCreatedAt():string{
    return this.createdAt
  }

  public getResponse():number | undefined{
    return this.response
  }
  public setResponse(value: number): void{
    this.response = value
  }

  public getGuestNames():string | null{
    return this.guestNames
  }
  public setGuestNames(value: string | null): void{
    this.guestNames = value
  }
  
  public getRepliedAt():string | undefined{
    return this.repliedAt
  }
  public setRepliedAt(value: string): void{
    this.repliedAt = value
  }

  public toDBModel(): GuestDB {
    return {
      id: this.id,
      tickets: this.tickets,
      created_at: this.createdAt,
      response: this.response,
      guest_names: this.guestNames,
      replied_at: this.repliedAt
    }
  }

  public toBusinessModel(): GuestBusinessModel {
    return {
      id: this.id,
      tickets: this.tickets,
      createdAt: this.createdAt,
      response: this.response,
      guestNames: this.guestNames,
      repliedAt: this.repliedAt
    }
  }

}