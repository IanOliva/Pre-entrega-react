import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ClipLoader from "react-spinners/ClipLoader";

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

    const camposCompletos = Object.values(producto).every((val) => val !== "");

    if (!camposCompletos) {
      setError(true);
      return;
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
        {["title", "price", "description", "category", "image"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={producto[field]}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        ))}

        {error && (
          <p className="text-red-500 text-sm">Todos los campos son obligatorios</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition w-full flex justify-center items-center gap-2"
        >
          {loading ? (
            <>
              <ClipLoader color="#ffffff" size={20} />
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
