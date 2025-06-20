import React from "react";
import Header from "../components/estaticos/Navbar";
import Footer from "../components/estaticos/Footer";

const AcercaDe = () => {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-purple-50 to-white py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800 leading-tight">
          Sobre <span className="text-purple-600">Nosotros</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          En nuestra tienda nos dedicamos a ofrecer productos de alta calidad con atención personalizada.
          Nuestro compromiso es brindar una experiencia de compra simple, segura y satisfactoria.
        </p>

        <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 border border-purple-100 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Misión</h2>
            <p className="text-gray-700">
              Proporcionar productos cuidadosamente seleccionados que mejoren el día a día de nuestros clientes, con un enfoque en calidad, servicio y confianza.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 border border-purple-100 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Visión</h2>
            <p className="text-gray-700">
              Ser la tienda de referencia en comercio digital, reconocida por la excelencia en atención al cliente y la innovación en nuestros servicios.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AcercaDe;
