import { useState } from 'react';
import { Link } from 'react-router-dom';
import './error.css';

function Error() {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <div id="wrapper" className={isLight ? 'light' : ''}>
      <div className="container">
        {/* Switcher */}
        <div className="switcher" onClick={toggleTheme}>
          <div className="text">
            Trocar para <span className="text-l">{isLight ? 'escuro' : 'claro'}</span>
            <br />tema
          </div>
        </div>

        {/* Dark Version */}
        {!isLight && (
          <div id="dark" className="row text-center">
            <div className="info">
              <img src="/assets/img/404-dark.png" alt="Erro 404" />
              <h1>404</h1>
              <h2>Página não encontrada</h2>
              <p>A página que você procura foi movida, removida ou nunca existiu.</p>
              <Link to="/" className="btn">
                Voltar para a Home
              </Link>
            </div>
          </div>
        )}

        {/* Light Version */}
        {isLight && (
          <div id="light" className="row text-center">
            <div className="info">
              <img src="/assets/img/404-light.gif" alt="Erro 404" />
              <h1>404</h1>
              <h2>Página não encontrada</h2>
              <p>A página que você procura foi movida, removida ou nunca existiu.</p>
              <Link to="/" className="btn">
                Voltar para a Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Error;