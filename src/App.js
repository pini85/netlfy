import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import movieDetails from "./components/MovieDetails/MovieDetails";
import NavBar from "./components/NavBar/NavBar";
const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:id" component={movieDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
