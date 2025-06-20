import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = ({ isOpen, onClose }) => {
  const { cart, handleDeleteFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div
      className={`fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-2xl z-[999] transition-transform duration-300 ease-in-out overflow-y-auto transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-4 border-b bg-purple-600 text-white">
        <h2 className="text-lg font-bold">Tu Carrito</h2>
        <button
          onClick={onClose}
          className="text-2xl hover:text-red-300 transition"
          aria-label="Cerrar carrito"
        >
          ×
        </button>
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col gap-4">
        {cart.length === 0 ? (
          <div className="text-center text-gray-500">
            <i className="fa-solid fa-cart-shopping text-4xl mb-2 text-purple-400" />
            <p className="text-sm">Tu carrito está vacío</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-start gap-4 border-b pb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 object-contain bg-gray-50 p-1 rounded"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-800 line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteFromCart(item)}
                  className="text-red-500 hover:text-red-700"
                  title="Eliminar del carrito"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer con Total */}
      {cart.length > 0 && (
        <div className="p-5 border-t bg-gray-100 mt-auto">
          <div className="flex justify-between text-lg font-semibold text-gray-800">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <button
            onClick={() => alert("Funcionalidad de compra pendiente")}
            className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-semibold transition"
          >
            Finalizar compra
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
