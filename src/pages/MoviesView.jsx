import { useState, useEffect, useContext } from 'react';
import MoviesContext from '../context/movies/movies-context';
import * as movieAPI from '../services/movie-api';
import { Link } from 'react-router-dom';
// import { MoviesPage } from '../components/MoviesPage';

export function MoviesView() {
  const [movies, setMovies] = useState(null);
  const { contextSearchQuery } = useContext(MoviesContext);

  useEffect(() => {
    if (contextSearchQuery === '') {
      return;
    }

    movieAPI
      .fetchFindMovies(contextSearchQuery)
      .then(movies => setMovies(movies.results))
      .catch();
  }, [contextSearchQuery]);

  return (
    <>
      <h1>What movie would you like to see?</h1>

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
