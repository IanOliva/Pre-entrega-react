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
      
      <h1 className="text-center mb-4 p-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
        Galeria de productos
      </h1>
      {cargando ? <LoadingScreen /> : <ProductList />}

      <Footer />
    </>
  );
};

export default GaleriaDeProductos;
