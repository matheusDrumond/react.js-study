// Styles
import './App.css'

// React Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <>
      <BrowserRouter>
      <ul>
        <Routes>
          <li>
            <Route path='/' element={<Home />} />
          </li>
          <li>
            <Route path='/about' element={<About />} />
          </li>
        </Routes>
      </ul>
      </BrowserRouter>
    </>
  )
}

export default App
