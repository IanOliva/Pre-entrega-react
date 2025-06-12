import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    //si hay token se mantiene la sesion
    const storedToken = localStorage.getItem("token");
    const storedAdmin = localStorage.getItem("isAdmin") === "true";

    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
      setIsAdmin(storedAdmin);
    }
  }, []);

  const login = (newToken, username) => {
    setToken(newToken);
    setIsAuthenticated(true);

    const adminUsername = "johnd"; 
    const adminStatus = username.toLowerCase() === adminUsername;
    setIsAdmin(adminStatus);

    localStorage.setItem("token", newToken);
    localStorage.setItem("isAdmin", adminStatus);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isAdmin, token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};


