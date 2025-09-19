import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./error.css";

function Error() {
  const [isLight, setIsLight] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <div id="wrapper" className={isLight ? "light" : ""}>
      <div className="container">
        {/* Switcher */}
        

        {/* Dark / Light Version */}
        <motion.div
          id={isLight ? "light" : "dark"}
          className="row text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="info">
            <motion.img
              src={isLight ? "/assets/img/404-light.gif" : "/assets/img/404-dark.png"}
              alt="Erro 404"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            <motion.h1
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* 404 */}
            </motion.h1>

            {/* <h2>Página não encontrada</h2>; */}
            <p>The page you are looking for has been moved, removed, or never existed.</p>

            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <button className="btn" onClick={() => navigate(-1)}>
                ⬅ Voltar
              </button>
              <Link to="/" className="btn">
                🏠 Voltar para a Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Error;
