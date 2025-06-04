import { useContext } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Contactos from './pages/Contactos'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import Login from './pages/Login'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'
import RutaProtegida from './components/auth/RutaProtegida'
import { CartContext} from './context/CartContext'


function App() {
 const {cart, handleAddToCart, handleDeleteFromCart, productos, cargando, error } = useContext(CartContext);
  



  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />

        <Route path='/acercade' element={<AcercaDe borrarProducto={handleDeleteFromCart} cart={cart} />} />

        <Route path='/productos' element={<GaleriaDeProductos borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />

        <Route path='/productos/:id' element={<GaleriaDeProductos borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />

        <Route path='/contacto' element={<Contactos borrarProducto={handleDeleteFromCart} cart={cart} />} />

        <Route path='/login' element={<Login />} />
        
        <Route path='/admin' element={
          <RutaProtegida>
            <Admin/> 
          </RutaProtegida>    
          } />

        <Route path='*' element={<NotFound />} />

      </Routes>

    </Router>
  )
}

export default App
