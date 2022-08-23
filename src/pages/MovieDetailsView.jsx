import { useState, useEffect } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  // Routes,
  // Route,
  // NavLink
} from 'react-router-dom';
import * as movieAPI from '../services/movie-api';
import { Button } from '../components/Button';
import { MovieDetails } from '../components/MovieDetails';
import { MovieCastView } from '../pages/MovieCastView';
import { MovieReviewsView } from '../pages/MovieReviewsView';

export function MovieDetailsView() {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    movieAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  function onGoBack() {
    navigate(location?.state?.from ?? '/');
  }

  return (
    <>
      <Button text="Back" onClick={onGoBack} />
      <MovieDetails movie={movie} />
      <hr />
      <MovieCastView />
      <MovieReviewsView />
    </>
  );
}
