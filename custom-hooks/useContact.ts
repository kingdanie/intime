import { harperGetContacts } from './../utils/harperdb/getContacts';
import { Contact } from './../types/Contact';
import { useState, useCallback, useEffect } from "react"

export const useContacts = (username: string) => {
  const [contacts, setContacts] = useState<Contact[]>([])

  // Get contacts from db then set contact state
  const getAndSetContacts = useCallback(
    async (username: string) => {
      try {
        const contacts: Contact[] = await harperGetContacts(username)
        setContacts(contacts)
      } catch (err) {
        console.log(err)
      }
    },
    [setContacts]
  )

  useEffect(() => {
    if (!username || contacts.length > 0) return
    getAndSetContacts(username)
  }, [username, contacts.length, getAndSetContacts])

  return { contacts: contacts, setContacts: setContacts, getAndSetContacts: getAndSetContacts }
}