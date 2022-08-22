import { useLocation } from 'react-router-dom';
import { getImgUrl } from '../../utils';
import { ListItem, LinkById, PosterImg, Title } from './MoviesListItem.styled';

export function MoviesListItem({ movie }) {
  const location = useLocation();
  const posterImg = getImgUrl(movie.poster_path);

  return (
    <ListItem>
      <LinkById to={`${movie.id}`} state={{ from: location }}>
        <PosterImg src={posterImg} alt={movie.title} />
        <Title>{movie.title}</Title>
      </LinkById>
    </ListItem>
  );
}
