import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        // Productos con stock fijo porque fakestore api no da el campo stock
        const productosConStock = datos.map((producto) => ({
          ...producto,
          stock: 10,
        }));
        setTimeout(() => {
          setProductos(productosConStock);
          setCargando(false);
        }, 2000);
      })
      .catch((error) => {
        console.log("Error", error);
        setCargando(false);
        setError(true);
      });
  }, []);

  const handleAddToCart = (product, cantidad) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      if (productInCart.quantity < product.stock) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + cantidad }
              : item
          )
        );
      } else {
        toast.error("No hay mas stock disponible");
      }
    } else {
      setCart([...cart, { ...product, quantity: cantidad }]);
      toast.success(`${product.title} agregado al carrito`);
    }
  };

  const handleDeleteFromCart = (product) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === product.id) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null; // Si quantity es 1, eliminar
            }
          } else {
            return item; // Si no es el producto, lo dejamos igual
          }
        })
        .filter((item) => item !== null); // Quita los productos nulos
    });
  };


  return (
    <CartContext.Provider value={{ cart, setCart, productos, cargando, error, handleAddToCart, handleDeleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
