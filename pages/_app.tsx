import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContext } from "../contexts/UserContexts";
import { useUser } from "../custom-hooks/useUser";
import { ContactsContext } from "../contexts/ContactsContext";
import { useContacts } from "../custom-hooks/useContact";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  const { username, setUsername, userInfo, setUserInfo } =
    useUser();
  const { contacts, setContacts, getAndSetContacts } =
    useContacts(username);
  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        userInfo,
        setUserInfo,
      }}
    >
      <ContactsContext.Provider
        value={{ contacts, setContacts, getAndSetContacts }}
      >
        <Component {...pageProps} />
      </ContactsContext.Provider>
    </UserContext.Provider>
  );
}
