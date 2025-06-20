import React, { useContext } from "react";
import Header from "../components/estaticos/Navbar";
import Footer from "../components/estaticos/Footer";
import ProductList from "../components/ProductList";
import LoadingScreen from "../components/estaticos/LoadingScreen";
import { CartContext } from "../context/CartContext";

const GaleriaDeProductos = () => {
  const { cargando } = useContext(CartContext);

  return (
    <>
      <Header />

      <main className="bg-gradient-to-br from-white via-purple-50 to-purple-100 py-16 px-4 min-h-screen">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-800 mb-4">
            Galería de <span className="text-purple-600">Productos</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explora nuestra variedad de productos seleccionados para vos. Calidad, buen precio y entrega segura garantizada.
          </p>
        </div>

        {cargando ? (
          <LoadingScreen />
        ) : (
          <section className="max-w-7xl mx-auto">
            <ProductList />
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default GaleriaDeProductos;
