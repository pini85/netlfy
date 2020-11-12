import axios from "axios";
const API_KEY = "c9f0874f";
export const omdbMovieDetails = async (imdbId) => {
  const data = await axios.get(
    `http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbId}`
  );
  return data.data;
};
