import { useState, useEffect } from 'react';
import * as movieAPI from '../services/movie-api';
import { Movies } from '../components/MovieList';

export function HomeView() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    movieAPI
      .fetchTrendingTodayMovies()
      .then(movies => setMovies(movies.results))
      .catch();
  }, []);

  return (
    <>
      <h1>Trending today</h1>

      {movies && <Movies movies={movies} />}
    </>
  );
}
