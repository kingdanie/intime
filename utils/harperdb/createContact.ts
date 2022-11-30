import { DB_URL } from "../../constants/constants";

export const harperCreateContact = async (
    name: string,
  username: string,
  phone: string,
  email?: string,
  contact_group_id?: string
) => {
  const DB_PW = process.env.HARPERDB_PW;
  if (!DB_URL || !DB_PW) {
    console.log("Error: .env variables are undefined");
    throw "Internal server error";
  }
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", DB_PW);
  const raw = JSON.stringify({
    operation: "insert",
    schema: "messages",
    table: "contacts",
    records: [
      {
        name: name,
        username: username,
        phone: phone,
        email: email,
        contact_group_id: "",
      },
    ],
  });
  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(DB_URL, requestOptions);
  const result = await response.json();
  return { response, result };
};
