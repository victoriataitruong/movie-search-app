// src/pages/Home.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "../movies"; // Import the Movie type
import MovieCard from "../components/MovieCard"; // Import MovieCard component

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]); // Initialize with empty array of Movie objects
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // Error state to handle failures

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = process.env.REACT_APP_TMDB_API_KEY; // Use the API key from the .env file
        if (!apiKey) {
          throw new Error("API key is missing. Please check your .env file.");
        }

        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        setMovies(response.data.results); // Set the fetched movie data
        setLoading(false);
      } catch (error: any) {
        setError("Error fetching movie data. Please try again later.");
        console.error("Error fetching movie data:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>; // Display an error message if an error occurs
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
