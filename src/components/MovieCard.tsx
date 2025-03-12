// src/components/MovieCard.tsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { Movie } from "../movies";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Link to={`/movie/${movie.id}`}> {/* Link the card to the movie details page */}
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-80 object-cover" // Ensure image is responsive and well-fitted
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-600">⭐ {movie.vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default MovieCard;
