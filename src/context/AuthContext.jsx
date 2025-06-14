import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!username) validationErrors.username = "El username es requerido";
    if (!password) validationErrors.password = "La contraseña es requerida";

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        login(data.token, username);

        if (username.toLocaleLowerCase() === "johnd") {
          console.log("admin detected");
          navigate("/admin");
        } else {
          console.log("cliente detected");
          navigate("/");
        }
      } else {
        const data = await response.json();
        setError(data);
      }
    } catch (error) {
      console.log(error);
      setError({ message: "Error al iniciar sesión" });
    }
  };

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
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isAdmin,
        token,
        login,
        logout,
        username,
        setusername,
        password,
        setPassword,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
