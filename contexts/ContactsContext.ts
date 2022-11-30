import React, { createContext } from 'react';
import type { Contact } from '../types/Contact';

interface ContactsContext {
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
  getAndSetContacts: (username: string) => Promise<void>;
}

export const ContactsContext = createContext({} as ContactsContext);