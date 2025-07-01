import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    setIsAuthorized(!!auth);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthorized, setIsAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
};
