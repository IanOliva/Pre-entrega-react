import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../components/estaticos/Navbar";
import LoadingScreen from "../components/estaticos/LoadingScreen";

const ProductDetail = () => {
  const [cantidad, setCantidad] = useState(1);
  const { productos, cargando, handleAddToCart } = useContext(CartContext);
  const { id } = useParams();

  const increase = () =>
    setCantidad((prev) => (prev < product.stock ? prev + 1 : prev));
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  const product = productos.find((producto) => producto.id == id);

  return (
    <>
      <Header />
      <section>
        <h1 className="text-center mb-4 p-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          Detalle del producto: {id}
        </h1>
        {product ? (
          <div className="bg-white shadow-md rounded-2xl flex items-center w-2xl h-100 mx-auto p-">
            <div className="w-full h-48 overflow-hidden mb-4 ">
              <img
                src={product.image}
                alt=""
                className="object-contain h-full w-full"
              />
            </div>
            <div className="w-full">
              <h2 className="text-lg font-semibold mb-2 w-full">
                {product.title}
              </h2>
              <p>{product.description}</p>
              <p className="text-green-600 font-bold text-lg mb-1">
                ${product.price}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                Stock: {product.stock}
              </p>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-xl w-10 h-10 rounded-full"
                    onClick={decrease}
                  >
                    -
                  </button>
                  <span className="text-base font-medium">{cantidad}</span>
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-xl w-10 h-10 rounded-full"
                    onClick={increase}
                  >
                    +
                  </button>
                </div>

                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => handleAddToCart(product,cantidad)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <p>Producto no encontrado</p>
          </div>
        )}
        {cargando && (
          <div className="flex justify-center items-center h-screen">
            <LoadingScreen />
          </div>
        )}
      </section>
    </>
  );
};

export default ProductDetail;
