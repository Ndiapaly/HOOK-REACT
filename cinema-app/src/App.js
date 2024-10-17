import React, { useState } from "react";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";

const initialMovies = [
  {
    title: "Inception",
    description: "A mind-bending thriller",
    posterURL: "url_to_poster",
    rating: 9,
  },
  // Ajoute plus de films ici
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  const handleFilter = (title, rating) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= rating
    );
    setFilteredMovies(filtered);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>Ma Collection de Films</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      <button
        onClick={() =>
          addMovie({
            title: "Nouveau Film",
            description: "Description du film",
            posterURL: "url_to_poster",
            rating: 8,
          })
        }
      >
        Ajouter un Nouveau Film
      </button>
    </div>
  );
}

export default App;
