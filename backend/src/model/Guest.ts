import { GuestBusinessModel } from "../business/FormBusiness"
import { GuestDB } from "../database/FormDatabase"

export class Guest {
  constructor(
    private id: string, 
    private tickets: number,
    private createdAt: string, 
    private response: number | undefined,
    private guestsNames: string | undefined,
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

  public getGuestsNames():string | undefined{
    return this.guestsNames
  }
  public setGuestsNames(value: string): void{
    this.guestsNames = value
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
      guests_names: this.guestsNames,
      replied_at: this.repliedAt
    }
  }

  public toBusinessModel(): GuestBusinessModel {
    return {
      id: this.id,
      tickets: this.tickets,
      createdAt: this.createdAt,
      response: this.response,
      guestsNames: this.guestsNames,
      repliedAt: this.repliedAt
    }
  }

}