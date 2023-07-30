import { knex } from 'knex'
import dotenv from 'dotenv'

dotenv.config()

//SQLite3
abstract class BaseDatabase {
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

export class PostsDatabase extends BaseDatabase{
  //attributes
  public static TABLE_GUESTS = "guests" //global constant

  //methods
  public async getPosts(q: string | undefined){
    let postsDB
    if(q){
      const result = await BaseDatabase
      // .connection(PostsDatabase.TABLE_POSTS)
      // .where("name", "LIKE", `%${q}%`)
      postsDB = result
    }else{
      const result = await BaseDatabase
      // .connection(PostsDatabase.TABLE_POSTS)
      postsDB = result
    }
    return postsDB
  }
}