import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
// links com react router

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/" > Inicio</NavLink>
      <NavLink to="/about" > Sobre</NavLink>
      <NavLink to="/products" > Produtos</NavLink>
    </nav>
  )
}

export default Navbar