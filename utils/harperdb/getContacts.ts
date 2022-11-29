import { harperFetch } from "../harperFetch"

export const harperGetContacts = async (username: string) => {

  const data = {
    operation: "sql",
    sql: `SELECT * FROM messages.contacts where username = '${username}'`
  }

  const { result } = await harperFetch(data)
  return result

}