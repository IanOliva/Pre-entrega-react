import { useState, useEffect } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Contactos from './pages/Contactos'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import NotFound from './pages/NotFound'
import RutaProtegida from './components/auth/RutaProtegida'



function App() {

  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(respuesta => respuesta.json())
      .then(datos => {
        // Productos con stock fijo porque fakestore api no da el campo stock
        const productosConStock = datos.map(producto => ({
          ...producto,
          stock: 10
        }));
        setTimeout(() => {
          setProductos(productosConStock)
          setCargando(false)
        }, 2000)
      })
      .catch(error => {
        console.log('Error', error)
        setCargando(false)
        setError(true)
      })

  }, [])

  const handleAddToCart = (product, cantidad) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      if (productInCart.quantity < product.stock) {
        setCart(cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + cantidad }
            : item
        ));
      } else {
        alert('No hay más stock disponible');
      }
    } else {
      setCart([...cart, { ...product, quantity: cantidad }]);
    }
  };


  const handleDeleteFromCart = (product) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === product.id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null; // Si quantity es 1, marcamos para eliminar
          }
        } else {
          return item; // Si no es el producto, lo dejamos igual
        }
      }).filter(item => item !== null); // Quitamos los productos nulos
    });
  };



  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />

        <Route path='/acercade' element={<AcercaDe borrarProducto={handleDeleteFromCart} cart={cart} />} />

        <Route path='/productos' element={<GaleriaDeProductos borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />

        <Route path='/contacto' element={<Contactos borrarProducto={handleDeleteFromCart} cart={cart} />} />
        
        <Route path='/admin' element={
          <RutaProtegida isAuthenticated={false} esAdmin={false}>
             {<h1>Admin</h1> /* // aca se reemplazara por el contenido de la pag admin */}
          </RutaProtegida>    
          } />

        <Route path='*' element={<NotFound />} />

      </Routes>

    </Router>
  )
}

export default App
