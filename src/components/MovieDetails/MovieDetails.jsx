import { getImgUrl } from '../../utils';
import PropTypes from 'prop-types';
import {
  Container,
  PosterImg,
  InfoCard,
  Title,
  Score,
  OverviewWraper,
  OverviewTitle,
  OverviewText,
  Genres,
  GenresList,
  GenresListItem,
} from './MovieDetails.styled';

export function MovieDetails({ movie }) {
  const { poster_path, title, vote_average, release_date, overview, genres } =
    movie;
  const posterImg = getImgUrl(poster_path);

  return (
    <>
      {movie && (
        <Container>
          <PosterImg src={posterImg} alt={title} />
          <InfoCard>
            <Title>{`${title} (${release_date.substring(0, 4)})`}</Title>
            <Score>{`User Score: ${Math.round(vote_average * 10)}%`}</Score>
            <OverviewWraper>
              <OverviewTitle>Overview:</OverviewTitle>
              <OverviewText>{overview}</OverviewText>
            </OverviewWraper>
            <Genres>
              Genres
              <GenresList>
                {genres.map(genre => (
                  <GenresListItem key={genre.id}>{genre.name}</GenresListItem>
                ))}
              </GenresList>
            </Genres>
          </InfoCard>
        </Container>
      )}
    </>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.object,
};
