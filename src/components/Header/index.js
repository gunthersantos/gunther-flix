import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="logo" to="/" aria-label="Voltar para a página inicial">Gunther Flix</Link>
      <Link className="favoritos" to="/favoritos" aria-label="Ver favoritos">Favorites</Link>
    </header>
  );
}

export default Header;