export interface AddContactArgs {
    open: boolean;
    toggle: () => void;
    addContact: (a: string, b: string) => Promise<void>;
  }