// Styles
import './App.css'

// React Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import React19Hooks from './pages/React19Hooks'

function App() {

  return (
    <>
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/react19">Hooks React 19</Link></li>
        </ul>
      </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/react19' element={<React19Hooks />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
