// This function can only be ran on the backend as it requires a "super_user" password
import { DB_URL } from "../../constants/constants"
export const harperCreateNewUserInfo = async (
    email: string,
    username: string,
    phone?: string,
  ) => {
    const DB_PW = process.env.HARPERDB_PW
    if (!DB_URL || !DB_PW) {
      console.log("Error: .env variables are undefined")
      throw "Internal server error"
    }
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", DB_PW)
    const raw = JSON.stringify({
      operation: "insert",
      schema: "messages",
      table: "user_info",
      "records": [
        {
      email: email.toLowerCase(),
      username: username.toLowerCase(),
      phone: phone,
      points: "50",
      balance: "0", 
      } 
    ]
    })
    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }
  
    const response = await fetch(DB_URL, requestOptions)
    const result = await response.json()
    return { response, result }
  }