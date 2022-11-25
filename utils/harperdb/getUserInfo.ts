import { harperFetch } from "../harperFetch"

export const harperGetUserInfo = async (username: string) => {

  const data = {
    operation: "sql",
    sql: `SELECT * FROM messages.user_info where username = '${username}'`
  }

  const { result } = await harperFetch(data)
  return result

}