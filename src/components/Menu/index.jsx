// components/Menu/index.jsx
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <header>
      <h1>Exercícios React</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/exercicios">Exercícios</Link>
      </nav>
    </header>
  )
}

export default Menu