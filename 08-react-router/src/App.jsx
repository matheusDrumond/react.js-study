// Hooks
import { useState } from 'react'

// Estilos
import './App.css'

// Importações do React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';

// Components 
import Navbar from './components/Navbar';
 
function App() {

  return (
    <>
      {/* Área de navegação entre as páginas */}
      <BrowserRouter>
      <Navbar />
        {/* Definir as rotas */}
        <Routes>
          {/* Rota individual de cada elemento */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
