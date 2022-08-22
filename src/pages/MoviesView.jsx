import { useState, useEffect, useContext } from 'react';
import MoviesContext from '../context/movies/movies-context';
import * as movieAPI from '../services/movie-api';
import { Movies } from '../components/MovieList';

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

  return <>{movies && <Movies movies={movies} />}</>;
}
