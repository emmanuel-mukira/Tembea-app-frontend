import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user_id, setUserId] = useState(0);

  const setAuthenticatedUser = (id) => {
    setUserId(id);
  };

  return (
    <AuthContext.Provider value={{ user_id, setAuthenticatedUser }}>
      {children}
    </AuthContext.Provider>
  );
};


export { AuthContext, AuthProvider };
