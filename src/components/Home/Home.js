import React from "react";
import MovieList from "../MovieList/MovieList";

const Home = (props) => {
  return (
    <div>
      <MovieList category="popular" />
    </div>
  );
};

export default Home;
