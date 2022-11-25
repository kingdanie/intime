import type { NextApiRequest, NextApiResponse } from "next"
import handler from "./../../middleware/_defaultHandler"
import { harperCreateNewUser } from "../../utils/harperdb/createNewUser"
import { harperCreateNewUserInfo } from "../../utils/harperdb/createNewUserInfo"


export default handler.post(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, username, password, confirmPassword } = req.body

    const errors: string[] = getFormErrors(email, username, password, confirmPassword)
    if (errors.length > 0) {
      return res.status(400).json({ error: errors })
    }

     // Create new user and userinfo with HarperDB, and send back result
     try {

      const createUser = harperCreateNewUser( username, password )
     const createUserInfo = harperCreateNewUserInfo(email, username,)

     const response = await Promise.all([createUser, createUserInfo])
    return res.status(response[0].response.status).json(response[0].result)

        // const { response, result } = await harperCreateNewUser(
        //     username,
        //   password
        // )        
        // return  res.status(response.status).json(result)
      } catch (err) {
        console.log(err)
        return res.status(500).json({ error: err })
      }
  }
)

const getFormErrors = (
    email: string,
  username: string,
  password: string,
  confirmPassword: string
) => {
  const errors: string[] = []
  if (!email || !username || !password || !confirmPassword) {
    errors.push("All fields are required")
  }
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters")
  }
  if (password !== confirmPassword) {
    errors.push("Passwords do not match")
  }
  return errors
}