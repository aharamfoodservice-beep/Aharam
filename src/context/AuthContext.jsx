import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Mock user for showcase purposes
  const [user, setUser] = useState({
    name: 'Sarah Executive',
    email: 'sarah@company.com',
    isAuthenticated: true
  });

  const login = () => {
    setUser({
      name: 'Sarah Executive',
      email: 'sarah@company.com',
      isAuthenticated: true
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
