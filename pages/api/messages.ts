import type { NextApiRequest, NextApiResponse } from "next";
import { harperCreateMsg } from "../../utils/harperdb/createMsg";
import handler from "./../../middleware/_defaultHandler";

export default handler.post(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { reciever_number, message, username, sent_date } = req.body;

    const errors: string[] = getFormErrors(
      reciever_number,
      message,
      username,
      sent_date,
    );
    if (errors.length > 0) {
      return res.status(400).json({ error: errors });
    }

    // Save new message into HarperDB, and send back result
    try {
      const { response, result } = await harperCreateMsg(
        reciever_number,
      message,
      username,
      sent_date,
      );
      return res.status(response.status).json(result);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }
);

const getFormErrors = (
    reciever_number: [],
    message: string,
    username: string,
    sent_date: string,
) => {
  const errors: string[] = [];
  if (reciever_number.length == 0 || !message) {
    errors.push("All fields are required");
  }
  if (reciever_number.length < 1) {
    errors.push("Please choose atleasst one recipient");
  }
  if (message.length < 4) {
    errors.push("Message must be a minimum of 4 characters");
  }
  return errors;
};
