import React, { useState } from "react";

const FormularioProducto = ({ onAgregar }) => {
  const [producto, setProducto] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !producto.title ||
      !producto.price ||
      !producto.description ||
      !producto.category ||
      !producto.image
    ) {
      setError(true);
      return;
    }
    onAgregar(producto);
    setProducto({
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
    });
    setError(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4 border border-gray-200"
    >
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

      {error && (
        <p className="text-red-500 text-sm">
          Todos los campos son obligatorios
        </p>
      )}

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
      >
        Agregar producto
      </button>
    </form>
  );
};

export default FormularioProducto;
