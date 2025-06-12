import React from "react";
import Header from "../components/estaticos/Navbar";
import Footer from "../components/estaticos/Footer";
import ProductList from "../components/ProductList";
import LoadingScreen from "../components/estaticos/LoadingScreen";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Home = () => {
  const { cargando } = useContext(CartContext);

  return (
    <>
      <Header />
      
      <main>
        <h1 className="text-center mb-4 p-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          Bienvenidos a mi Tienda
        </h1>

        <p className="text-center mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptate illum molestias, voluptates dolorem rerum. Alias tempore ut
          nisi eum, harum natus velit veritatis ea iste illum facere, ipsam
          modi!
        </p>
        {cargando ? <LoadingScreen /> : <ProductList />}
      </main>

      <Footer />
    </>
  );
};

export default Home;
