import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


// Favorites component to display and manage saved movies
function Favoritos() {
  const [filmes, setFilmes] = useState([]);// State to hold the list of saved movies

  // Effect hook to load saved movies from localStorage on mount
  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  // Function to delete a movie from favorites
  function excluirFilme(id) {
   let filtroFilmes = filmes.filter((item) => item.id !== id);
    setFilmes(filtroFilmes);
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
    toast.success("Filme removido com sucesso!");
  }

  // Render the favorites list
  return (
    <div className="meus-filmes">
      <h1>My Movies</h1>
      
      {filmes.length === 0 && <span>You haven't saved any movies yet? Start now! 😊</span>}

      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>View details</Link>
                <button onClick={() => excluirFilme(item.id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;