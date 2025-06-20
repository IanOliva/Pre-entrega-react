import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { PuffLoader } from "react-spinners";

Modal.setAppElement("#root");

const ProductModal = ({
  isOpen,
  onRequestClose,
  onAgregar,
  onActualizar,
  productoSeleccionado,
}) => {
  const [producto, setProducto] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Prellenar campos si es edición
  useEffect(() => {
    if (productoSeleccionado) {
      setProducto(productoSeleccionado);
    } else {
      setProducto({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
      });
    }
  }, [productoSeleccionado, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (!producto.title) validationErrors.title = "El título es requerido";
    if (!producto.price){
      validationErrors.price = "El precio es requerido";
    } else if (isNaN(producto.price) || producto.price < 1) {
      validationErrors.price = "El precio debe ser un número mayor o igual a cero";
    }
    
    if (!producto.description){
      validationErrors.description = "La descripción es requerida";
    } else if (producto.description.length < 10) {
      validationErrors.description = "La descripción debe tener al menos 10 caracteres";
    }
    if (!producto.category) validationErrors.category = "La categoría es requerida";
    if (!producto.image) validationErrors.image = "La imagen es requerida";

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return false;
    }
   

    setLoading(true);

    try {
      if (productoSeleccionado && onActualizar) {
        await onActualizar(producto.id, producto);
      } else {
        await onAgregar(producto);
      }

      onRequestClose(); // cierra el modal al terminar
      setError(false);
    } catch (e) {
      console.log("Error:", e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Formulario Producto"
      closeTimeoutMS={200}
      className="transition-all duration-300 ease-out transform bg-white p-6 rounded-lg max-w-md w-full mx-auto mt-20 outline-none shadow-xl scale-100 opacity-100"
      overlayClassName="fixed inset-0 bg-white/10 backdrop-blur-md flex justify-center items-center z-50 transition-opacity duration-300"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        {productoSeleccionado ? "Editar Producto" : "Agregar Producto"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-4 border border-gray-200"
      >
        <input
          type="text"
          placeholder="Título"
          name="title"
          value={producto.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          placeholder="Precio"
          name="price"
          
          value={producto.price}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Descripción"
          name="description"
          
          value={producto.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Categoría"
          name="category"
          value={producto.category}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="URL de la imagen"
          name="image"
         
          value={producto.image}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        {error && (
          <p className="text-red-500 text-sm"> {Object.values(error).join(", ")}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition w-full flex justify-center items-center gap-2"
        >
          {loading ? (
            <>
              <PuffLoader color="#ffffff" size={20} />
              Cargando...
            </>
          ) : productoSeleccionado ? (
            "Guardar Cambios"
          ) : (
            "Agregar Producto"
          )}
        </button>
      </form>
    </Modal>
  );
};

export default ProductModal;
