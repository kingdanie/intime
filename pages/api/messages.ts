import type { NextApiRequest, NextApiResponse } from "next"
import { harperCreateMsg } from "../../utils/harperdb/createMsg"
import handler from "./../../middleware/_defaultHandler"



export default handler.post(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { senderId, contactList, message, username, email } = req.body

    const errors: string[] = getFormErrors(senderId, contactList, message, username, email)
    if (errors.length > 0) {
      return res.status(400).json({ error: errors })
    }

     // Create new user and userinfo with HarperDB, and send back result
     try {


        const { response, result } = await harperCreateMsg(
                senderId,
                contactList,
                message,
                username, 
                email
        )        
        return  res.status(response.status).json(result)

      } catch (err) {
        console.log(err)
        return res.status(500).json({ error: err })
      }
  }
)

const getFormErrors = (
    senderId: string,
  contactList: string[],
  message: string,
  username: string, 
  email: string
) => {
  const errors: string[] = []
  if (!senderId || !contactList || !message) {
    errors.push("All fields are required")
  }
  if (contactList.length < 1) {
    errors.push("Please choose atleasst one recipient")
  }
  if (message.length < 4 ) {
    errors.push("Message must be a minimum of 4 characters")
  }
  return errors
}