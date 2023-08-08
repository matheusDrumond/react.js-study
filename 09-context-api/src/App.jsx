// Estilos
import './App.css'

// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
