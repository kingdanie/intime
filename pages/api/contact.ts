import { harperCreateContact } from './../../utils/harperdb/createContact';
import type { NextApiRequest, NextApiResponse } from "next";
import handler from "./../../middleware/_defaultHandler";

export default handler.post(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const {  name, username, phone } = req.body;

    const errors: string[] = getFormErrors(
         name, 
         username, 
         phone 
    );
    if (errors.length > 0) {
      return res.status(400).json({ error: errors });
    }

    // Save new message into HarperDB, and send back result
    try {
      const { response, result } = await harperCreateContact(
        name,
        username,
        phone
      );
      return res.status(response.status).json(result);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }
);

const getFormErrors = (
  name: string,
  username: string,
  phone: string
) => {
  const errors: string[] = [];
  if (!username  || !phone) {
    errors.push("All fields are required");
  }
  if (!username) {
    errors.push("Please login before attempting to add a contact");
  }
//   if (typeof name == "string") errors.push("contact name must be a string");
  if (phone.length < 4) {
    errors.push("Message must be a minimum of 4 characters");
  }
  return errors;
};
