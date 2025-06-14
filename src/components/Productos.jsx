import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";



const Productos = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
     const {handleAddToCart} = useContext(CartContext);
  

  const increase = () =>
    setCantidad((prev) => (prev < producto.stock ? prev + 1 : prev));
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <section className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center w-72 hover:shadow-xl transition-shadow duration-300">
      <div className="w-full h-48 flex items-center justify-center overflow-hidden mb-4">
        <img src={producto.image} alt="" className="object-contain h-full" />
      </div>

      <h3 className="text-lg font-semibold text-center mb-2">
        {producto.title}
      </h3>
      <p className="text-green-600 font-bold text-lg mb-1">${producto.price}</p>
      <p className="text-sm text-gray-500 mb-3">Stock: {producto.stock}</p>

      <div className="flex items-center gap-2 mb-4">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-xl px-3 py-1 rounded-full"
          onClick={decrease}
        >
          -
        </button>
        <span className="text-base font-medium">{cantidad}</span>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-xl px-3 py-1 rounded-full"
          onClick={increase}
        >
          +
        </button>
      </div>

      <button
        onClick={() => handleAddToCart(producto, cantidad)}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
      >
        Agregar al carrito
      </button>
      
    </section>
  );
};

export default Productos;
