import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as movieAPI from '../services/movie-api';
import { getImgUrl } from '../utils';
// import { MoviesList } from '../components/MovieList';

export function HomeView() {
  const location = useLocation();
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
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                <img
                  src={getImgUrl(movie.poster_path)}
                  alt={movie.title}
                  width="300"
                />
                <h2>{movie.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
