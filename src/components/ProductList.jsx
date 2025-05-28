import React from "react";
import Productos from "./Productos";

const ProductList = ({ productos, agregarCarrito }) => {
  return (
    <>
      <div className="container-fluid mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Nuestros Productos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <Productos
              key={producto.id}
              producto={producto}
              agregarCarrito={agregarCarrito}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
