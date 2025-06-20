import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart";
import LoginModal from "../LoginModal";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-purple-700 flex items-center gap-2">
          <i className="fa fa-home"></i> React Ecommerce
        </div>

        {/* Botón hamburguesa */}
        <button
          className="sm:hidden text-gray-800 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fa fa-bars"></i>
        </button>

        {/* Menú de navegación */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row gap-4 items-center`}
        >
          <Link
            to="/"
            onClick={handleLinkClick}
            className="text-gray-800 text-sm font-semibold hover:text-purple-600"
          >
            Inicio
          </Link>
          <Link
            to="/acercade"
            onClick={handleLinkClick}
            className="text-gray-800 text-sm font-semibold hover:text-purple-600"
          >
            Sobre nosotros
          </Link>
          <Link
            to="/productos"
            onClick={handleLinkClick}
            className="text-gray-800 text-sm font-semibold hover:text-purple-600"
          >
            Galería de productos
          </Link>
          <Link
            to="/contacto"
            onClick={handleLinkClick}
            className="text-gray-800 text-sm font-semibold hover:text-purple-600"
          >
            Contacto
          </Link>

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="text-gray-800 text-sm font-semibold hover:text-red-500"
              title="Cerrar sesión"
            >
              <i className="fa fa-sign-out"></i>
            </button>
          ) : (
            <button
              onClick={handleLoginOpen}
              className="text-gray-800 text-sm font-semibold hover:text-purple-600"
              title="Iniciar sesión"
            >
              <i className="fa fa-user"></i>
            </button>
          )}

          <button
            onClick={() => {
              setCartOpen(true);
              setIsMenuOpen(false);
            }}
            className="text-gray-800 hover:text-purple-600"
            title="Carrito"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </nav>

      {/* Modales */}
      <LoginModal isOpen={isLoginOpen} onRequestClose={() => setLoginOpen(false)} />
      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
};

export default Header;
