import axios from 'axios';

// console.log('API Key:', process.env.REACT_APP_TMDB_API_KEY); 
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { api_key: process.env.REACT_APP_TMDB_API_KEY },
});

export default api;