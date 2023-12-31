// Styles
import './App.css'

// React Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
