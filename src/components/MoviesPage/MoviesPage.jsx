import { useState, useEffect, useContext } from 'react';
import MoviesContext from '../../context/movies/movies-context';
import * as movieAPI from '../../services/movie-api';
import { Link } from 'react-router-dom';

export function MoviesPage(params) {
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
      <h1>MoviesPage</h1>

      {/* {movies && ( */}
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to="/movies">{movie.title}</Link>
            </li>
          ))}
      </ul>
      {/* )} */}
    </>
  );
}
