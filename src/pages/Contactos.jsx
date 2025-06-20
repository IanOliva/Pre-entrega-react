import React from "react";
import Header from "../components/estaticos/Navbar";
import Footer from "../components/estaticos/Footer";

const Contactos = () => {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-white via-purple-50 to-purple-100 py-16 px-4 min-h-screen">
        <div className="max-w-2xl mx-auto">
          <h2 className="mb-4 text-5xl font-extrabold text-center text-gray-800">
            Contacto
          </h2>
          <p className="mb-10 text-center text-lg text-gray-600">
            ¿Tenés alguna duda o consulta? No dudes en escribirnos. Te
            responderemos lo antes posible.
          </p>

          <form
            action="https://fabform.io/f/{form-id}"
            method="post"
            className="space-y-6 bg-white shadow-xl rounded-2xl p-8"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-gray-700"
              >
                Tu email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="nombre@ejemplo.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-semibold text-gray-700"
              >
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-semibold text-gray-700"
              >
                Tu mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Escribí tu mensaje..."
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Enviar mensaje
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              También podés escribirnos por correo:{" "}
              <a
                className="text-purple-600 hover:underline"
                href="mailto:mitienda@example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                mitienda@example.com
              </a>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contactos;
