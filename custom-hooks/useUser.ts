import { UserInfo } from './../types/UserInfo';
import { harperGetUserInfo } from './../utils/harperdb/getUserInfo';
import { harperGetUsername } from '../utils/harperdb/getUsername';
import { useState, useEffect } from "react"


export const useUser = () => {
  const [username, setUsername] = useState("")
  const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo)
  const DB_URL = process.env.DB_URL
  const tryLogUserIn = async (accessToken: string) => {
    try {
      const username = await harperGetUsername(accessToken);
      //const userDetails = await harperGetUserDetails(accessToken);
      if (username) {
        const userInfo = await harperGetUserInfo(username);
        // console.log(userInfo)
        setUsername(username);
        setUserInfo(userInfo);
      }
      // if (userDetails) {
      //   // const userInfo = await harperGetUserInfo(username);
      //   setUsername(userDetails.username);
      //   console.log(userDetails)
      //  // setUserInfo(userDetails.userInfo);
      // }
    } catch (error) {
      console.error("Error logging in:", error);
    }
   };

  
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    if (!username && accessToken) {
      tryLogUserIn(accessToken);
    }
  }, [username]);

  return { username, setUsername, userInfo, setUserInfo }
}