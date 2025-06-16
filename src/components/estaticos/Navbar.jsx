import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart";
import LoginModal from "../LoginModal";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const { auth } = useContext(AuthContext);

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

              <button
                onClick={() => setLoginOpen(true)}
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
              >
                <i className="fa fa-user"></i>
              </button>
              <button className="btnCart" onClick={() => setCartOpen(true)}>
                <i className="fa-solid fa-cart-shopping hover:text-purple-600 cursor-pointer"></i>
              </button>
              <LoginModal isOpen={isLoginOpen} onRequestClose={() => setLoginOpen(false)} />
              <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
