import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../../services/movie-api';

export function HomePage(params) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    movieAPI
      .fetchTrendingTodayMovies()
      .then(movies => setMovies(movies.results))
      .catch();
  }, []);

  // console.log(movies);

  return (
    <>
      <h1>Trending today</h1>

      {movies && (
        <ul>
          {movies &&
            movies.map(movie => (
              <li key={movie.id}>
                <Link to="/movies">{movie.title}</Link>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}
