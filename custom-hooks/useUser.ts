import { UserInfo } from './../types/UserInfo';
import { harperGetUserInfo } from './../utils/harperdb/getUserInfo';
import { harperGetUsername } from '../utils/harperdb/getUsername';
import { useState, useEffect } from "react"


export const useUser = () => {
  const [username, setUsername] = useState("")
  const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo)

  useEffect(() => {
    // User is logged in
    if (username) return

    // Check for access token and try to log user in
    const accessToken = localStorage.getItem("access_token")
    if (accessToken) {
      tryLogUserIn(accessToken)
    }

    async function tryLogUserIn(accessToken: string) {
      const username = await harperGetUsername(accessToken)
      const userInfo = await harperGetUserInfo(username)
      if (username) {
        setUsername(username)
        setUserInfo(userInfo)
      }
    }
  })

  return { username, setUsername, userInfo, setUserInfo }
}