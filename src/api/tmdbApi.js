import axios from "axios";
const API_KEY = "3e296e6f6a1b142633468c58b584ab9b";
export const tmdbPopularMovies = async () => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data.data;
};

export const tmdbMovieDetails = async (id) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data.data;
};

export const tmdbMovieCasts = async (id) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );
  return data.data.cast;
};
