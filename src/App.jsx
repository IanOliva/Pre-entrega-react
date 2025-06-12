import { useContext } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AcercaDe from "./pages/AcercaDe";
import Contactos from "./pages/Contactos";
import GaleriaDeProductos from "./pages/GaleriaDeProductos";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import RutaProtegida from "./components/auth/RutaProtegida";
import { CartContext } from "./context/CartContext";

function App() {
  const { productos } = useContext(CartContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/acercade" element={<AcercaDe />} />

        <Route path="/productos" element={<GaleriaDeProductos />} />

        <Route path="/productos/:id" element={<h1></h1>} />

        <Route path="/contacto" element={<Contactos />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <RutaProtegida>
              <Admin productos={productos} />
            </RutaProtegida>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
