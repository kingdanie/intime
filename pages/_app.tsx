import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContext } from "../contexts/UserContexts.js";
import { useUser } from "../custom-hooks/useUser";
import { ContactsContext } from "../contexts/ContactsContext";
import { useContacts } from "../custom-hooks/useContact";
import { RouteGuard } from "../components/RouteGaurd";

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
        <RouteGuard>
          <Component {...pageProps} />
        </RouteGuard>

      </ContactsContext.Provider>
    </UserContext.Provider>
  );
}
