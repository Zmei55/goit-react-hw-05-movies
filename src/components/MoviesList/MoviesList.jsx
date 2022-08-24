import { Link, useLocation } from 'react-router-dom';
import { getImgUrl } from '../../utils';
import {} from './MoviesList.styled';

export function MoviesList({ movies }) {
  const location = useLocation();

  return (
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
  );
}
