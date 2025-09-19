import { useEffect, useState } from 'react';
import api from '../../services/api';
import './home.css';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { toast } from 'react-toastify'; // Importação adicionada

// Home component to display a list of currently playing movies
function Home() {
  const [filmes, setFilmes] = useState([]);// State to hold the list of movies
  const [page, setPage] = useState(1);// State to track the current page number
  const [loading, setLoading] = useState(true); // State to manage loading status

  // Effect hook to load movies when the page changes
  useEffect(() => {
    async function loadFilmes() {
      try {
        const response = await api.get("movie/now_playing", {
          params: { page, language: "en-US" },// Fetch movies in English with current page
        });
        const results = response.data.results || [];// Extract results or default to empty array
        // console.log("Movies loaded:", results.slice(0, 3).map(f => ({ id: f.id, title: f.title })));
        setFilmes(results); // Update state with fetched movies
        setLoading(false); // Stop loading
      } catch (error) {
        // console.error("Error in Home:", error);// Log any errors
        setLoading(false);
        toast.error("Error loading movies!"); // Notify user of error
      }
    }
    loadFilmes();
  }, [page]);// Re-run effect when page changes

// Render loading skeletons while data is being fetched
  if (loading) {
    return (
      <div className="container">
        <div className="lista-filmes">
          {Array(10).fill().map((_, index) => (
            <article key={index}>
              <Skeleton height={340} /> {/* Skeleton for movie poster */}
              <Skeleton height={20} width={200} /> {/* Skeleton for title */}
              <Skeleton height={40} /> {/* Skeleton for button */}
            </article>
          ))}
        </div>
      </div>
    );
  }
  
  // Render the movie list and pagination
  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => (
          <article key={filme.id}>
            <strong>{filme.title}</strong>
            <img 
              src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} 
              alt={`Poster of the movie ${filme.title}`} 
              loading="lazy" 
            />
            <Link to={`/filme/${filme.id}`}>View details</Link>
          </article>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Home;