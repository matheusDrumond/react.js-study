// Estilos
import './Navbar.css'

import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>Sobre</Link> */}

        {/* Forma de acessar se o link está ativo*/}
        <NavLink to={'/'} 
        // className={({isActive}) => isActive ? 'active' : 'inactive'}
        >
          Home
        </NavLink>
        <NavLink to={'/about'}>About</NavLink>
    </nav>
  )
}

export default Navbar