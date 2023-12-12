import dotenv from 'dotenv'

dotenv.config()

//SQLite3
// import * as fs from 'fs';
// import * as path from 'path';
import knex from 'knex';

export abstract class BaseDatabase {
  protected static connection = knex({
      client: "sqlite3",
      connection: {
          filename: process.env.DB_FILE_PATH as string,
      },
      useNullAsDefault: true,
      pool: { 
          min: 0,
          max: 1,
          afterCreate: (conn: any, cb: any) => {
              conn.run("PRAGMA foreign_keys = ON", cb)
          }
      }
  })
}
// export class BaseDatabase {
//   protected static connection = knex({
//     client: 'pg', // Usar o cliente do PostgreSQL
//     connection: {
//       host: process.env.DB_HOST, // Host do banco de dados
//       port: Number(process.env.DB_PORT), // Porta do banco de dados
//       user: process.env.DB_USER, // Usuário do banco de dados
//       password: process.env.DB_PASSWORD, // Senha do banco de dados
//       database: process.env.DB_NAME, // Nome do banco de dados
//     },
//     pool: {
//       min: 0,
//       max: 1,
//       afterCreate: (conn: any, cb: any) => {
//         conn.query('SET timezone="UTC";', (err: any) => {
//           cb(err, conn);
//         });
//       },
//     },
//   });

//   // Função para criar a tabela a partir do arquivo 'form.db'
//   public async createFormTable(): Promise<void> {
//     try {
//       const tableExists = await BaseDatabase.connection.schema.hasTable('form');
      
//       if (!tableExists) {
//         const filePath = path.join(__dirname, 'form.sql'); // Caminho completo para o arquivo
//         const sql = fs.readFileSync(filePath, 'utf-8'); // Ler o conteúdo do arquivo
//         await BaseDatabase.connection.raw(sql); // Executar o SQL para criar a tabela
//         console.log('Tabela "form" criada com sucesso.');
//       }
//     } catch (error) {
//       console.error('Erro ao criar/verificar a tabela "form":', error);
//     }
//   }
// }



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
  public static TABLE_GUESTS = "form" //global constant

  //methods
  public async getGuests(){
    // await this.createFormTable()

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