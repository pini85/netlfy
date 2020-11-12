import React from "react";
import { tmdbMovieDetails, tmdbMovieCasts } from "../../api/tmdbApi";
import { omdbMovieDetails } from "../../api/omdbApi";

class MovieDetails extends React.Component {
  state = { movie: null };

  async componentDidMount() {
    console.log();
    const id = this.props.match.params.id;
    const tmdbDetails = await tmdbMovieDetails(id);
    const omdbDetails = await omdbMovieDetails(tmdbDetails.imdb_id);
    const casts = await tmdbMovieCasts(id);
    console.log(casts);

    const movieObj = {
      title: omdbDetails.Title,
      year: omdbDetails.Year,
      tmdbRating: tmdbDetails.vote_average,
      genre: omdbDetails.Genre,
      actors: casts,
    };
    this.setState({ movie: movieObj });
  }
  render() {
    const displayActors = () => {
      return this.state.movie.actors.map((actor) => {
        return <div>{actor.name}</div>;
      });
    };

    const displayMovie = () => {
      console.log(this.state.movie);
      return (
        <div>
          <h1>{this.state.movie.title}</h1>
          <div>{this.state.movie.year}</div>
          <div>{this.state.movie.tmdbRating}</div>
        </div>
      );
    };
    console.log(this.props);
    return (
      <div>
        {this.state.movie && displayMovie()}
        <div>{this.state.movie && displayActors()}</div>
      </div>
    );
  }
}
export default MovieDetails;
