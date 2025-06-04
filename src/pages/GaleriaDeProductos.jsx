import React from 'react'
import Header from '../components/estaticos/Navbar'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import LoadingScreen from '../components/estaticos/LoadingScreen'

const GaleriaDeProductos = ({cart,productos, cargando,agregarCarrito, borrarProducto}) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart}/>
      <h1 className='text-center mb-4 p-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl'>Galeria de productos</h1>
      {
        cargando ? (<LoadingScreen/> ):
            
        <ProductList agregarCarrito={agregarCarrito} productos={productos}/>
      }

      <Footer/>
    </>
  )
}

export default GaleriaDeProductos
