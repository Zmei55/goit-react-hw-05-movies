import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../services/movie-api';
import { CastList } from '../components/CastList';

export default function MovieCastView() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState('');

  useEffect(() => {
    movieAPI.fetchCastFromMovie(movieId).then(res => setCasts(res.cast));
  }, [movieId]);

  return <>{casts && <CastList casts={casts} />}</>;
}
