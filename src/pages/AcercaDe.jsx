import React from "react";
import Header from "../components/estaticos/Navbar";
import Footer from "../components/estaticos/Footer";

const AcercaDe = () => {
  return (
    <>
      <Header />
      <div className="bg-white">
        <header className="bg-purple-600 text-white text-center py-12">
          <h1 className="text-4xl font-bold mt-16">Sobre nosotros</h1>
        </header>

        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Mision & Vision</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Nuestra misión es proporcionar productos de alta calidad y servicios
            de venta para satisfacer las necesidades de nuestros clientes.
          </p>
        </section>

        <section className="bg-purple-600 text-white py-12 px-4">
          <h2 className="text-2xl font-bold text-center">Nuestra Visión</h2>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            Nuestra visión es ser reconocidos como la empresa líder en la venta
            de productos de alta calidad y servicios de venta para satisfacer
            las necesidades de nuestros clientes.
          </p>
        </section>

        {/* <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">
            Committed To Your Health And Happiness
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Book Appointment</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Informed Staff</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Total Health</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
              <h3 className="text-xl font-bold">Get Consultation</h3>
            </div>
          </div>
        </section> */}

        {/* <section className="bg-green-500 text-white text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Patient Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
            <div className="p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition-colors">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                sit amet tristique mi."
              </p>
              <h3 className="mt-4 font-bold">- Patient A</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition-colors">
              <p>
                "Nullam ac augue eget diam posuere vehicula. Vivamus quis nulla
                ac justo euismod posuere."
              </p>
              <h3 className="mt-4 font-bold">- Patient B</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition-colors">
              <p>
                "Fusce tincidunt, arcu nec vestibulum tincidunt, eros massa
                ullamcorper urna."
              </p>
              <h3 className="mt-4 font-bold">- Patient C</h3>
            </div>
          </div>
        </section> */}

        {/* <section className="text-center py-12 px-4 w-full">
          <h2 className="text-2xl font-bold">
            Get Answer To Your Most Asked Questions
          </h2>
          <div className="mt-8">
            <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
              <h3 className="text-xl font-bold">
                How do I make an appointment online?
              </h3>
              <p className="mt-2 text-gray-700">
                You can book an appointment online through our website or mobile
                app.
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
              <h3 className="text-xl font-bold">
                What types of medical tests do you offer?
              </h3>
              <p className="mt-2 text-gray-700">
                We offer a wide range of medical tests including blood tests,
                imaging, and more.
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
              <h3 className="text-xl font-bold">Do you accept insurance plans?</h3>
              <p className="mt-2 text-gray-700">
                Yes, we accept most major insurance plans.
              </p>
            </div>
          </div>
        </section> */}
      </div>
      <Footer />
    </>
  );
};

export default AcercaDe;
