import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const setAuthenticatedUser = (id) => {
    setUserId(id);
  };

  return (
    <AuthContext.Provider value={{ userId, setAuthenticatedUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
