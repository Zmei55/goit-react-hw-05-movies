import { getImgUrl } from '../../utils';
import { ListItem, LinkById, PosterImg, Title } from './MoviesListItem.styled';

export function MoviesListItem({ movie }) {
  const posterImg = getImgUrl(movie.poster_path);

  return (
    <ListItem>
      <LinkById to={`${movie.id}`}>
        <PosterImg src={posterImg} alt={movie.title} />
        <Title>{movie.title}</Title>
      </LinkById>
    </ListItem>
  );
}
