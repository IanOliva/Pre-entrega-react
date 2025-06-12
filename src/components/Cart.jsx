import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Cart = ({ isOpen, onClose }) => {
   const {cart, handleDeleteFromCart } = useContext(CartContext);
  
  return (
    <div
      className={`fixed top-0 right-0 w-72 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[999] overflow-y-auto ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-3 border-b bg-gray-100">
        <h2 className="text-lg font-bold text-gray-800">Tu Carrito</h2>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-red-500 text-xl focus:outline-none"
        >
          ×
        </button>
      </div>

      <div className="p-4">
        {cart.length === 0 ? (
          <p className="text-red-500 text-sm">El carrito está vacío</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center text-gray-800"
              >
                <div className=" flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-10 h-10 object-cover mr-4"
                  />
                  <div className="max-w-[200px]">
                    <p className="truncate overflow-hidden whitespace-nowrap text-sm font-medium">
                      {item.title}
                    </p>
                    <p className="text-sm">
                      ${item.price} – Cantidad: {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteFromCart(item)}
                  className="text-red-500 hover:text-red-700"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="p-4 border-t bg-gray-100 absolute bottom-0 w-full">
        <p>Total: ${cart.reduce((total, item) => total + (item.price * item.quantity), 0)}</p>
      </div>
    </div>
  );
};

export default Cart;
