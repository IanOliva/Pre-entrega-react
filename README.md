# 🛒 React eCommerce App

Este es un proyecto de tienda online hecho con **React**, que consume productos desde una API externa (FakeStore API). Incluye funcionalidades completas para usuarios y administradores, con login, carrito de compras, buscador, paginación y panel de administración.

## 🚀 Características

### 🧑‍💻 Usuario
- 🔐 Inicio de sesión (FakeStore API)
- 🛍️ Ver productos
- 🔎 Buscar productos
- 📦 Agregar productos al carrito
- ➕ Incrementar / disminuir cantidades
- 🧾 Ver detalles de productos
- 💰 Calcular total del carrito

### 🛠️ Administrador
- 📊 Panel exclusivo con autenticación
- ➕ Crear productos
- ✏️ Editar productos
- ❌ Eliminar productos
- 🧭 Navegación protegida

> ✅ Usuario administrador de prueba:
> - Usuario: `johnd`
> - Contraseña: `m38rmF$`

> ✅ Usuario cliente:
> - Usuario: `mor_2314`
> - Contraseña: `83r5^_`

## 🧱 Tecnologías utilizadas

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Modal](https://reactcommunity.org/react-modal/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [React Spinners](https://www.davidhu.io/react-spinners/)
- [Toastify](https://fkhadra.github.io/react-toastify/)
- API: [https://fakestoreapi.com](https://fakestoreapi.com)

## 🛡️ Funcionalidades destacadas

- 🔐 Autenticación con contexto global (`AuthContext`)
- 🛒 Carrito persistente en contexto (`CartContext`)
- ⚡ Modales dinámicos para login y formularios
- 🎯 Búsqueda y paginación en tiempo real
- 🎨 UI moderna y responsive con Tailwind



## 📌 Notas

- La API usada no almacena datos entre sesiones, por lo que los cambios de productos son simulados.
