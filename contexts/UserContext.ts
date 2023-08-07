import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  username: string;
  userInfo: string;
}

interface UserContextValue {
  user: User;
  setUsername: (username: string) => void;
  setUserInfo: (info: string) => void;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({ username: '', userInfo: '' });

  const setUsername = (username: string) => {
    setUser((prevUser) => ({ ...prevUser, username }));
  };

  const setUserInfo = (info: string) => {
    setUser((prevUser) => ({ ...prevUser, userInfo: info }));
  };

  return (
    <UserContext.Provider value={{ user, setUsername, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
