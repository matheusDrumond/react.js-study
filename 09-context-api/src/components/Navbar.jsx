// react Router
import { NavLink } from 'react-router-dom'

// Estilos
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/products'}>Produtos</NavLink>
            <NavLink to={'/about'}>Sobre</NavLink>
        </ul>
    </nav>
  )
}

export default Navbar