// src/pages/MovieDetails.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../movies"; // Import the fetchMovieDetails function
import { Movie } from "../movies"; // Import the Movie type

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>(); // Ensure `id` is typed as string
  const [movie, setMovie] = useState<Movie | null>(null); // Type movie as Movie or null
  const [error, setError] = useState<string | null>(null); // Error state to handle failures

  useEffect(() => {
    if (id) {
      // Fetch movie details based on the ID
      fetchMovieDetails(id)
        .then(setMovie) // Set the movie state with the fetched details
        .catch((err) => {
          console.error("Error fetching movie details:", err);
          setError("Error fetching movie details. Please try again later.");
        });
    }
  }, [id]);

  if (error) {
    return <p className="text-center text-red-500">{error}</p>; // Show error message if fetching fails
  }

  if (!movie) {
    return <p className="text-center">Loading...</p>; // Display loading message if movie is not fetched yet
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p className="text-gray-500">{movie.release_date} | ⭐ {movie.vote_average.toFixed(1)}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} // Display the movie poster
        alt={movie.title}
        className="w-full max-w-md mx-auto my-4"
      />
      <p className="text-lg">{movie.overview}</p> {/* Display the movie overview */}
    </div>
  );
};

export default MovieDetails;
