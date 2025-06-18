// src/context/AdminContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const agregarProducto = async (producto) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      });

      if (!response.ok) throw new Error("Error al agregar producto");

      const data = await response.json();
      toast.success("Producto agregado correctamente");
      setProducts([...products, data]);
    } catch (error) {
      toast.error("Error al agregar producto:" + error.message);
      setError(true);
    }
  };

  const editarProducto = async (id, producto) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      });

      if (!response.ok) throw new Error("Error al editar producto");

      const data = await response.json();
      toast.success("Producto editado correctamente");
      setProducts(products.map((p) => (p.id === id ? data : p)));
    } catch (error) {
      toast.error("Error al editar producto: " + error.message);
      setError(true);
    }
  };

  const eliminarProducto = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "¿Estás seguro de eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (confirmDelete.isConfirmed) {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
          method: "DELETE",
        });
        if (!res.ok) throw new Error("Error al eliminar producto");

        toast.success("Producto eliminado correctamente");
        setProducts(products.filter((p) => p.id !== id));
      } catch (error) {
        toast.error("Error al eliminar el producto: " + error.message);
        setError(true);
      }
    }
  };

  return (
    <AdminContext.Provider
      value={{
        products,
        loading,
        error,
        fetchProducts,
        agregarProducto,
        editarProducto,
        eliminarProducto,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
