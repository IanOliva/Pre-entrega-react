import React from "react";


const Cart = ({ cartItems, isOpen, onClose, borrarProducto }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-72 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[999] overflow-y-auto ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-3 border-b bg-gray-100">
        <h2 className="text-lg font-bold text-gray-800">Carrito de Compras</h2>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-red-500 text-xl focus:outline-none"
        >
          ×
        </button>
      </div>

      <div className="p-4">
        {cartItems.length === 0 ? (
          <p className="text-red-500 text-sm">El carrito está vacío</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center text-gray-800"
              >
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm">
                    ${item.price} – Cantidad: {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => borrarProducto(item)}
                  className="text-red-500 hover:text-red-700"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
