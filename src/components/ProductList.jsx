import React, {useContext} from "react";
import Productos from "./Productos";
import { CartContext } from "../context/CartContext";

const ProductList = () => {

 const {productos} = useContext(CartContext);
  
  return (
    <>
      <div className="container-fluid mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Nuestros Productos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <Productos
              key={producto.id}
              producto={producto}
              
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
