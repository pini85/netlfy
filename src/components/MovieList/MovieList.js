import React from "react";
import Card from "../Card/Card";
import { tmdbPopularMovies } from "../../api/tmdbApi";
class MovieList extends React.Component {
  state = { data: null };
  async componentDidMount() {
    switch (this.props.category) {
      case "popular":
        const data = await tmdbPopularMovies();
        this.setState({ data });
        break;
      default:
        break;
    }
  }

  render() {
    const displayCards = () => {
      return this.state.data.results.map((movie) => {
        return (
          <React.Fragment key={movie.id}>
            <Card
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date}
              id={movie.id}
              poster={movie.poster_path}
            />
          </React.Fragment>
        );
      });
    };

    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {this.state.data && displayCards()}
      </div>
    );
  }
}

export default MovieList;
