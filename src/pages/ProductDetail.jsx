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
      <section className="p-6">
        <h1 className="text-center mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          Detalle del producto: {id}
        </h1>

        {product ? (
          <div className="bg-white shadow-md rounded-2xl flex flex-col md:flex-row gap-6 max-w-5xl mx-auto p-6">
            {/* Imagen */}
            <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-center">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain h-64 md:h-80 w-full"
              />
            </div>

            {/* Detalles */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div className="overflow-y-auto max-h-64 pr-2">
                <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                <p className="text-sm text-gray-600 mb-4">
                  {product.description}
                </p>
              </div>

              <div>
                <p className="text-green-600 font-bold text-xl mb-2">
                  ${product.price}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Stock: {product.stock}
                </p>

                {/* Cantidad y botón */}
                <div className="flex items-center gap-3 flex-wrap">
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
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full"
                    onClick={() => handleAddToCart(product, cantidad)}
                  >
                    Agregar al carrito
                  </button>
                </div>
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
