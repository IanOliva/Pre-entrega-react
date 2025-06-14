import React, { useState, useEffect } from "react";

const FormularioEdicion = ({ productoSeleccionado, onActualizar }) => {
  const [producto, setProducto] = useState(productoSeleccionado);

  useEffect(() => {
    setProducto(productoSeleccionado);
  }, [productoSeleccionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onActualizar(producto.id, producto);
      }}
      className="bg-white p-6 rounded-lg shadow-md space-y-4 border border-gray-200"
    >
      <div>
        <input
          type="number"
          name="id"
          placeholder="ID"
          value={producto.id}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={producto.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <input
          type="text"
          name="price"
          placeholder="Precio"
          value={producto.price}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <input
          type="text"
          name="description"
          placeholder="Descripción"
          value={producto.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <input
          type="text"
          name="category"
          placeholder="Categoría"
          value={producto.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={producto.image}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
      >
        Editar Producto
      </button>
    </form>
  );
};

export default FormularioEdicion;
