
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./Home";
import MovieInfo from "./movie-info";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie-info/:movie_name" element={<MovieInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
