import { MoviesListItem } from '../MoviesListItem';
import { List } from './MoviesList.styled';

export function MoviesList({ movies }) {
  return (
    <List>
      {movies.map(movie => (
        <MoviesListItem key={movie.id} movie={movie} />
      ))}
    </List>
  );
}
