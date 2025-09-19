import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './filme-info.css';
import api from '../../services/api';
import { toast } from 'react-toastify';

// Movie component to display details of a specific movie
function Filme() {
  const { id } = useParams(); // Extract movie ID from URL parameters
  const navigate = useNavigate(); // Navigation function to redirect
  const isMounted = useRef(false); // Ref to track if component is mounted

  const [filme, setFilme] = useState({});// State to hold movie details
  const [loading, setLoading] = useState(true);// State to manage loading status
  const [error, setError] = useState(null);// State to hold any errors

  // Effect hook to fetch movie details when ID changes
  useEffect(() => {
    isMounted.current = true; // Mark component as mounted
    let controller = new AbortController(); // Controller for aborting fetch requests

    async function loadFilme() {
      if (!isMounted.current) return; // Exit if component is unmounted

      try {
        // console.log(`Fetching movie with ID: ${id} - Abort enabled: ${controller.signal.aborted}`); 
        const response = await api.get(`/movie/${id}`, {
          params: { language: "en-US" },
                   // signal: controller.signal, // Temporarily commented for debug
        });
        if (isMounted.current) {
          setFilme(response.data);// Update state with movie data
          setLoading(false);// Stop loading
          setError(null); // Clear any errors
          // console.log("Movie found:", response.data.title);
        }
      } catch (error) {
        if (!isMounted.current) return; // Exit if unmounted
        
        console.error("Detailed error:", error.name, error.message, error.response?.status);// Log error details
        if (isMounted.current) {
          setError(`Movie not found or API error. Status: ${error.response?.status || 'Unknown'}`);// Set error message
          setLoading(false);// Stop loading
          toast.error("Movie not found!");// Notify user
        }
      }
    }

    if (id) {
      loadFilme();// Fetch movie if ID exists
    } else if (isMounted.current) {
      setError("ID do filme inválido.");// Set error for invalid ID
      setLoading(false);// Stop loading
    }

    return () => {
      isMounted.current = false; // Mark as unmounted on cleanup
      // controller.abort(); // Temporarily commented for debug
    };
  }, [id]);// Re-run effect when ID changes

  // Render loading state
  if (loading) {
    return (
      <div className="filme-info">
        <h1>Loading details...</h1>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="filme-info">
        <h1>Erro</h1>
        <p>{error}</p>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  // Function to save movie to favorites
  function salvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix");
    let filmesSalvos = JSON.parse(minhaLista) || [];
    const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id);

    if (hasFilme) {
      toast.warn("This movie is already in the list!"); // Warn if movie exists
      return;
    }

    filmesSalvos.push(filme);// Add movie to list
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));// Save to localStorage
    toast.success("Movie saved successfully!");// Notify success
  }

  // Render movie details
  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img 
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} 
        alt={`Background image of the movie ${filme.title}`} 
        loading="lazy" 
      />

      <h3>Synopsis</h3>
      <p>{filme.overview || "Synopsis not available."}</p>

      <strong>Rating: {filme.vote_average ? filme.vote_average.toFixed(1) : 'N/A'} / 10</strong>
      <div className="area-buttons">
        <button onClick={salvarFilme}>Save</button>
        <button>
          <a target="_blank" rel="external noopener noreferrer" href={`https://www.youtube.com/results?search_query=${encodeURIComponent(filme.title + ' Trailer')}`}>
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Filme;