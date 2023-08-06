// Hooks
import { useState } from 'react'

// Estilos
import './App.css'

// Importações do React Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Components 
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import Error404 from './pages/Error404';
import Search from './pages/Search';
 
function App() {

  return (
    <>
      {/* Área de navegação entre as páginas */}
      <BrowserRouter>
      <Navbar />
      {/* Search  */}
      <SearchForm />
        {/* Definir as rotas */}
        <Routes>
          {/* Rota individual de cada elemento */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* Rota dinâmica */}
          <Route path='/products/:id' element={<Product />} />
          {/* Nested routes */}
          <Route path='/products/:id/info' element={<Info />}/>
          <Route path='/search' element={<Search />} />
          {/* Redirect */}
          <Route path='/company' element={<Navigate to={'/about'} />}/>
          {/* Error 404 */}
          <Route path='*' element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
