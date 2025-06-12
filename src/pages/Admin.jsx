import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../components/estaticos/LoadingScreen";
import FormularioProducto from "../components/FormularioProducto";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  // const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
        setError(true);
      });
  }, []);

  if (loading) return <LoadingScreen />;
  if (error)
    return (
      <p className="text-center text-red-500 mt-10">
        Error al cargar productos
      </p>
    );

  const agregarProducto = async (producto) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });

      if (!response.ok) {
        throw new Error("Error al agregar producto");
      }

      const data = await response.json();
      alert("Producto agregado correctamente");
      setProducts([...products, data]);
      setOpen(false);

    } catch (error) {
      console.log("Error", error);
      setError(true);
    }
  };

  return (
    <>
      <nav className="bg-gray-100 font-sans w-full h-12 shadow-sm">
        <ul className="container mx-auto px-4 flex justify-end items-center h-full">
          <li>
            <a href="/" className="text-sm text-gray-700 hover:underline">
              Cerrar sesión
            </a>
          </li>
        </ul>
      </nav>

      <h1 className="text-center text-3xl font-bold mt-8">
        Panel de administrador
      </h1>

      <section className="container mx-auto mt-8 px-4">
        <div className="bg-gray-200 mb-4 border border-gray-300 rounded-lg flex justify-between items-center">
          <h2 className="text-2xl font-bold p-4">Productos</h2>
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 m-2 rounded"
          >
            <i className="fa fa-plus mr-2"></i>Crear producto
          </button>
          {open && <FormularioProducto onAgregar={agregarProducto}/>}
        </div>

        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold">Imagen</th>
              <th className="px-6 py-3 text-sm font-semibold">Producto</th>
              <th className="px-6 py-3 text-sm font-semibold">Stock</th>
              <th className="px-6 py-3 text-sm font-semibold">Precio</th>
              <th className="px-6 py-3 text-sm font-semibold">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((producto) => (
              <tr
                key={producto.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4">
                  <img
                    src={producto.image}
                    alt={producto.title}
                    className="w-12 h-12 object-contain"
                  />
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {producto.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {producto.rating?.count ?? "N/A"}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  ${producto.price}
                </td>
                <td className="px-6 py-4 flex space-x-2">
                  <button className="px-3 py-1 text-sm text-white bg-yellow-500 rounded hover:bg-yellow-600">
                    <i className="fa fa-edit mr-1"></i>Editar
                  </button>
                  <button className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600">
                    <i className="fa fa-trash mr-1"></i>Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Admin;
