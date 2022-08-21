import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../services/movie-api';
import { CastItem } from '../components/CastItem';

export function MovieCastView() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState('');

  useEffect(() => {
    movieAPI.fetchCastFromMovie(movieId).then(res => setCasts(res.cast));
  }, [movieId]);

  return <>{casts && <CastItem casts={casts} />}</>;
}
