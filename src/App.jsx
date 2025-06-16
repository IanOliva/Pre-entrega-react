import { useContext } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AcercaDe from "./pages/AcercaDe";
import Contactos from "./pages/Contactos";
import GaleriaDeProductos from "./pages/GaleriaDeProductos";

import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import RutaProtegida from "./components/auth/RutaProtegida";
import { CartContext } from "./context/CartContext";
import ProductDetail from "./pages/ProductDetail";
import { ToastContainer } from "react-toastify";

function App() {
  const { productos } = useContext(CartContext);

  return (
    
    <Routes>
      
      <Route path="/" element={<Home />} />

      <Route path="/acercade" element={<AcercaDe />} />

      <Route path="/productos" element={<GaleriaDeProductos />} />

      <Route path="/productos/:id" element={<ProductDetail />} />

      <Route path="/contacto" element={<Contactos />} />


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
  );
}

export default App;
