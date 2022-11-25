import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserContext } from '../contexts/UserContents'
import { useUser } from '../custom-hooks/useUser'

export default function App({ Component, pageProps }: AppProps) {
  const {username, setUsername, userInfo, setUserInfo} = useUser()
  return (
    <UserContext.Provider value={{ username, setUsername, userInfo, setUserInfo }}>
<Component {...pageProps} />
    </UserContext.Provider>
  )
}
