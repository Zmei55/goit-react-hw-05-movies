import { useLocation } from 'react-router-dom';
import { getImgUrl } from '../../utils';
import {
  List,
  ListItem,
  LinkById,
  PosterImg,
  Title,
} from './MoviesList.styled';

export function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <LinkById to={`${movie.id}`} state={{ from: location }}>
            <PosterImg
              src={getImgUrl(movie.poster_path)}
              alt={movie.title}
              width="300"
            />
            <Title>{movie.title}</Title>
          </LinkById>
        </ListItem>
      ))}
    </List>
  );
}
