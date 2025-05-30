import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart";

const Header = ({ cartItems, borrarProducto }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <header className="bg-gray-100 font-sans w-full m-0">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <i className="fa fa-home"> React Ecommerce</i>
            </div>

            <div className="hidden sm:flex sm:items-center">
              <Link
                to="/"
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Inicio
              </Link>
              <Link
                to="/acercade"
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Sobre nosotros
              </Link>
              <Link
                to="/productos"
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Galeria de productos
              </Link>
              <Link
                to="/contacto"
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Contacto
              </Link>
              <button className="btnCart" onClick={() => setCartOpen(true)}>
                <i className="fa-solid fa-cart-shopping hover:text-purple-600 cursor-pointer"></i>
              </button>
              <Cart
                borrarProducto={borrarProducto}
                cartItems={cartItems}
                isOpen={isCartOpen}
                onClose={() => setCartOpen(false)}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
