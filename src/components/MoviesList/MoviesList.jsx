import { useLocation } from 'react-router-dom';
import { getImgUrl } from '../../utils';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  LinkRoute,
  PosterImg,
  Title,
} from './MoviesList.styled';

export function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <LinkRoute to={`${movie.id}`} state={{ from: location }}>
            <PosterImg
              src={getImgUrl(movie.poster_path)}
              alt={movie.title}
              width="300"
            />
            <Title>{movie.title}</Title>
          </LinkRoute>
        </ListItem>
      ))}
    </List>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array,
};
