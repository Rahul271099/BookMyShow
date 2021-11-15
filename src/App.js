import React from "react";
import axios from "axios";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// HOC(Higher Order Components)

import MovieHOC from "./HOC/Movie.HOC";
import DefaultHOC from "./HOC/Default.HOC";

// Pages
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;
function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={MoviePage} />
    </>
  );
}

export default App;
