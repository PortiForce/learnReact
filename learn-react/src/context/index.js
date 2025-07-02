import React, { createContext, useState, useEffect } from "react";
import { AuthService } from "../API/AuthService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setIsAuthorized(AuthService.isAuthenticated());
    setUsername(AuthService.getUsername());
  }, []);

  const login = (name, password) => {
    AuthService.login(name, password);
    setIsAuthorized(true);
    setUsername(name);
  };

  const logout = () => {
    AuthService.logout();
    setIsAuthorized(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthorized, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
