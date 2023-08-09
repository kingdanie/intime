import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: '', userInfo: '' });

  const setUsername = (username) => {
    setUser((prevUser) => ({ ...prevUser, username }));
  };

  const setUserInfo = (info) => {
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
