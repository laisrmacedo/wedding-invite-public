import dotenv from 'dotenv'

dotenv.config()

//SQLite3
import * as fs from 'fs';
import * as path from 'path';
import knex from 'knex';

abstract class BaseDatabase {
  private static migrationExecuted = false;

  protected static connection = knex({
    client: "pg", 
    connection: {
      host: process.env.DB_HOST as string,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER as string,
      password: process.env.DB_PASSWORD as string,
      database: process.env.DB_NAME as string,
    },
    pool: { 
      min: 0,
      max: 1,
      afterCreate: (conn: any, cb: any) => {
        conn.query("SET timezone='UTC';", () => { // Configuração específica para PostgreSQL
          if (!this.migrationExecuted) {
            this.runMigrations(conn);
            this.migrationExecuted = true;
          }
          cb();
        });
      }
    }
  });

  private static async runMigrations(conn: any) {
    try {
      const sqlFilePath = path.join(__dirname, 'form.sql'); 
      const sql = fs.readFileSync(sqlFilePath).toString();
      
      await this.connection.schema.raw(sql); 
      console.log('Tabela criada com sucesso!');
    } catch (error) {
      console.error('Erro ao criar a tabela:', error);
    }
  }
}


export interface GuestDB {
  id: string,
  tickets: number,
  created_at: string,
  response: number | undefined,
  guest_names: string | null,
  replied_at: string | undefined
}

export class FormDatabase extends BaseDatabase{
  //attributes
  public static TABLE_GUESTS = "guests" //global constant

  //methods
  public async getGuests(){
    const guestDB = await BaseDatabase
      .connection(FormDatabase.TABLE_GUESTS)

    return guestDB
  }

  public async insertGuest(guest: GuestDB): Promise<void> {
    await BaseDatabase
      .connection(FormDatabase.TABLE_GUESTS)
      .insert(guest)
  }

  public async findGuestById(id: string): Promise<GuestDB | undefined> {
    const [result]: GuestDB[] = await BaseDatabase
        .connection(FormDatabase.TABLE_GUESTS)
        .where({ id })

    return result
  }

  public async deleteGuest(id: string): Promise<void> {
    await BaseDatabase
      .connection(FormDatabase.TABLE_GUESTS)
      .del()
      .where({ id })
  }

  public async updateGuest(id: string, updatedUser: GuestDB): Promise<void> {
    await BaseDatabase
      .connection(FormDatabase.TABLE_GUESTS)
      .update(updatedUser)
      .where({ id })
  }
}