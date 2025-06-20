import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/estaticos/Navbar";
import Footer from "../components/estaticos/Footer";
import LoadingScreen from "../components/estaticos/LoadingScreen";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const { cargando } = useContext(CartContext);
  const navigate = useNavigate();

  const irAProductos = () => {
    navigate("/productos");
  };

  return (
    <>
      <Header />

      {cargando ? (
        <LoadingScreen />
      ) : (
        <main className="bg-gradient-to-br from-purple-50 to-white py-20 px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800 leading-tight">
            Bienvenidos a <span className="text-purple-600">Mi Tienda</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Descubrí los mejores productos al mejor precio. Elegí, comprá y
            recibí todo desde la comodidad de tu casa.
          </p>

          <button
            onClick={irAProductos}
            className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
          >
            Ver productos
          </button>
        </main>
      )}

      <Footer />
    </>
  );
};

export default Home;
