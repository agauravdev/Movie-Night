import React, { useState } from "react";
import "./styles.css";

const movies = {
  Comedy: [
    { name: "21 Jump Street", rating: "5/5" },
    { name: "Horrible Bosses", rating: "4/5" },
    { name: "Lets be Cops", rating: "4.9/5" }
  ],
  Superheros: [
    { name: "Iron Man 3", rating: "4.5/5" },
    { name: "Batman, The Dark Knight", rating: "5/5" },
    { name: "Spiderman Far from home", rating: "4.9/5" }
  ],
  Action: [
    { name: "The Matrix", rating: "4/5" },
    { name: "Fast and Furious", rating: "4.5/5" },
    { name: "Mission Impossible", rating: "4.7/5" }
  ]
};

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("Comedy");

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="Movie">
          🎥
        </span>
        &nbsp;Its my turn to suggest a movie{" "}
      </h1>
      <p>Here are some of my fav from different genres</p>
      <div>
        {Object.keys(movies).map((genre) => (
          <button
            className="genre"
            key={genre}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        {movies[selectedGenre].map((movie) => (
          <div key={movie.name} className="movie">
            <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
              {movie.name}
            </p>
            <hr style={{ width: "150px", marginLeft: 0 }} />
            <span style={{ color: "#00bfa6" }}>Rating : {movie.rating}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
