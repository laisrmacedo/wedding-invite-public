import { FormDatabase } from "../database/FormDatabase";

export class FormBusiness{
  constructor(
    private formDatabase: FormDatabase
  ){}

  public getGuests = async () => {
    const output = await this.formDatabase.getGuests()

    if(!output){
      return 'There is no registration in the requested date range.'
    }else{
      return output
    }
  }
}