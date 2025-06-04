import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const RutaProtegida = ({ children }) => {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RutaProtegida;
