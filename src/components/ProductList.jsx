import React, { useContext, useEffect, useState } from "react";
import Productos from "./Productos";
import { CartContext } from "../context/CartContext";

const ProductList = () => {
  const { productos } = useContext(CartContext);
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 6;

  // Filtrado por búsqueda
  const productosFiltrados = productos.filter((producto) =>
    producto.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Cálculo de índices para la página actual
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosVisibles = productosFiltrados.slice(
    indicePrimerProducto,
    indiceUltimoProducto
  );

  // Reiniciar a la primera página cuando cambia la búsqueda
  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda]);

  return (
    <div className="container-fluid mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Nuestros Productos</h2>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productosVisibles.length > 0 ? (
          productosVisibles.map((producto) => (
            <Productos key={producto.id} producto={producto} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No se encontraron productos.</p>
        )}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from(
          { length: Math.ceil(productosFiltrados.length / productosPorPagina) },
          (_, i) => (
            <button
              key={i}
              onClick={() => setPaginaActual(i + 1)}
              className={`px-3 py-1 rounded border ${
                paginaActual === i + 1
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-800 hover:bg-purple-100"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ProductList;
