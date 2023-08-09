import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext({
  username: '',
  setUsername: (username) => {},
  userInfo: {},
  setUserInfo: (userInfo) => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: '',
    userInfo: {},
  });

  const setUsername = (username) => {
    setUser((prevUser) => ({ ...prevUser, username }));
  };

  const setUserInfo = (userInfo) => {
    setUser((prevUser) => ({ ...prevUser, userInfo }));
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
