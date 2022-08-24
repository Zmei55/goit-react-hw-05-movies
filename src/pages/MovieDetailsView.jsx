import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import * as movieAPI from '../services/movie-api';
import { Button } from '../components/Button';
import { MovieDetails } from '../components/MovieDetails';
import { MovieDetailsLinks } from '../components/MovieDetailsLinks';

export default function MovieDetailsView() {
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
      <Button type="button" onClick={onGoBack} text="Back">
        Back
      </Button>

      {movie && <MovieDetails movie={movie} />}
      <hr />

      {movie && <MovieDetailsLinks />}
      <Outlet />
    </>
  );
}
