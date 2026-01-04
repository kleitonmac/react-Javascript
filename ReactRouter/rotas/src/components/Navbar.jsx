// Importando o arquivo CSS para estilizar a navbar
import './Navbar.css';

// Importando Link e NavLink do React Router
// Link: navegação sem recarregar a página
// NavLink: igual ao Link, mas permite identificar quando a rota está ativa (útil para estilos)
import { Link, NavLink } from 'react-router-dom';

// Componente de navegação principal
const Navbar = () => {
  return (
    // Tag <nav> para representar navegação no layout
    <nav className="nav"> {/* Classe usada no CSS */}

      {/* Exemplos de navegação com Link (comentados por enquanto) */}
      {/* 
        <Link to="/">Home</Link>
        <Link to="/about">About</Link> 
      */}

      {/* 
        Usando NavLink para adicionar a classe 'active' quando o usuário está na rota atual.
        - isActive = propriedade automática do NavLink
        - Se o link estiver ativo, adiciona a classe 'active', senão string vazia
        - Isso facilita trocar estilos no CSS usando .active
      */}
      <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Home
      </NavLink>

      <NavLink 
        to="/about" 
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        About
      </NavLink>

    </nav>
  )
}

// Exportando o componente para ser utilizado em outros arquivos
export default Navbar;
