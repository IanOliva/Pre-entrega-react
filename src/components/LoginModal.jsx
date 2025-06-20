import React, { useState } from "react";
import Modal from "react-modal";
import { useAuth } from "../context/AuthContext";
import { PuffLoader } from "react-spinners";

Modal.setAppElement("#root"); // Esto es importante para accesibilidad

const LoginModal = ({ isOpen, onRequestClose }) => {
  const [loading, setLoading] = useState(false);

  const { error, username, setusername, password, setPassword, handleLogin } =
    useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const success = await handleLogin();
    setLoading(false);
    if (success) {
      onRequestClose(); // Cierra el modal si el login fue exitoso
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Iniciar Sesión"
      closeTimeoutMS={200}
      className="transition-all duration-300 ease-out transform bg-white p-6 rounded-lg max-w-md w-full mx-auto mt-20 outline-none shadow-xl scale-100 opacity-100"
      overlayClassName="fixed inset-0 bg-white/10 backdrop-blur-md flex justify-center items-center z-50 transition-opacity duration-300"
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

        {error && (
          <div className="text-red-500 text-sm space-y-1">
            {typeof error === "string" ? (
              <p>{error}</p>
            ) : (
              Object.values(error).map((errMsg, idx) => (
                <p key={idx}>{errMsg}</p>
              ))
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          {loading ? (
            <>
              <PuffLoader color="#ffffff" size={20} />
              <span>Cargando...</span>
            </>
          ) : (
            "Iniciar sesión"
          )}
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
