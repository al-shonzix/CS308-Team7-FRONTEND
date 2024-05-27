// src/AdminLoginContext.js
import React, { createContext, useState } from 'react';

export const AdminLoginContext = createContext();

export const AdminLoginProvider = ({ children }) => {
  const [AdminLoginSuccessful, setAdminLoginSuccessful] = useState(false);

  return (
    <AdminLoginContext.Provider value={{ AdminLoginSuccessful, setAdminLoginSuccessful }}>
      {children}
    </AdminLoginContext.Provider>
  );
};
