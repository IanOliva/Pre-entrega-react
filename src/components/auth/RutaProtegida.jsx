import { Navigate } from 'react-router-dom';

const RutaProtegida = ({ children, isAuthenticated, esAdmin }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!esAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RutaProtegida;
