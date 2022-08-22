import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../services/movie-api';
import { Button } from '../components/Button';
import { MovieDetails } from '../components/MovieDetails';
import { MovieCastView } from '../pages/MovieCastView';
import { MovieReviewsView } from '../pages/MovieReviewsView';

export function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    movieAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {/* <Button>Back</Button> */}
      <Button text="Back" />
      <MovieDetails movie={movie} />
      <hr />
      <MovieCastView />
      <MovieReviewsView />
    </>
  );
}
