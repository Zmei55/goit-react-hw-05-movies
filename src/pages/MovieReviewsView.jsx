import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../services/movie-api';
import { Reviews } from '../components/Reviews';

export default function MovieReviewsView() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    movieAPI
      .fetchReviewsFromMovie(movieId)
      .then(res => setReviews(res.results));
  }, [movieId]);

  return <>{reviews && <Reviews reviews={reviews} />}</>;
}
