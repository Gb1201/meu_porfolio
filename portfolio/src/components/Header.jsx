import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 40px",
      background: "#111827"
    }}>
      <h2 style={{ color: "#38bdf8" }}>Meu Portfólio</h2>

      <nav>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/sobre">Sobre</Link>
        <Link style={linkStyle} to="/projetos">Projetos</Link>
        <Link style={linkStyle} to="/experiencias">Experiências</Link>
        <Link style={linkStyle} to="/contato">Contato</Link>
      </nav>
    </header>
  )
}

const linkStyle = {
  color: "#e2e8f0",
  marginLeft: "20px",
  textDecoration: "none"
}