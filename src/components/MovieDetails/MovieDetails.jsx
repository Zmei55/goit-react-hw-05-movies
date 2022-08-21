// import { useState, useEffect } from 'react';
import * as movieAPI from '../../services/movie-api';
import placeholder from '../../image/placeholder.png';
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

  // useEffect(() => {
  //   function posterImgUrl(path) {
  //     return poster_path !== null
  //       ? movieAPI.fetchImageFromMovie(path)
  //       : placeholder;
  //   }
  // })

  function posterImgUrl(path) {
    return poster_path !== null
      ? movieAPI.fetchImageFromMovie(path)
      : placeholder;
  }

  return (
    <>
      {movie && (
        <Container>
          <PosterImg src={posterImgUrl(poster_path)} alt={title} />
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
