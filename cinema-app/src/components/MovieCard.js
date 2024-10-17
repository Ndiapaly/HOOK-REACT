import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="card mb-3" style={{ width: "18rem" }}>
      <img
        src="https://th.bing.com/th/id/OIP.NHi5Vc2EUThEN05spHIzswAAAA?rs=1&pid=ImgDetMain"
        className="card-img-top"
        alt={movie.title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <p className="card-text">
          <small className="text-muted">Note : {movie.rating}/10</small>
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
