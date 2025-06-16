import React from "react";
import Modal from "react-modal";
import { useAuth } from "../context/AuthContext";

Modal.setAppElement("#root"); // Esto es importante para accesibilidad

const LoginModal = ({ isOpen, onRequestClose }) => {
  const {
    error,
    username,
    setusername,
    password,
    setPassword,
    handleLogin,
  } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    const success = await handleLogin(e);
    if (success) {
      onRequestClose(); // Cierra el modal si el login fue exitoso
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Iniciar Sesión"
      className="bg-white p-6 rounded-lg max-w-md mx-auto mt-20 outline-none shadow-xl backdrop-blur-lg"
      overlayClassName="fixed inset-0 bg-white/10 backdrop-blur-sm flex justify-center items-start z-50"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Iniciar sesión</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Iniciar sesión
        </button>
      </form>
      <button
        onClick={onRequestClose}
        className="mt-4 text-sm text-gray-500 hover:text-gray-700 w-full"
      >
        Cancelar
      </button>
    </Modal>
  );
};

export default LoginModal;
