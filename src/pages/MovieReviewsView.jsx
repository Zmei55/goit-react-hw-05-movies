import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../services/movie-api';
import { Reviews } from '../components/Reviews';

export function MovieReviewsView() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    movieAPI
      .fetchReviewsFromMovie(movieId)
      .then(res => setReviews(res.results));
  }, [movieId]);

  // function getReviews() {
  //   movieAPI
  //     .fetchReviewsFromMovie(movieId)
  //     .then(res => setReviews(res.results));
  // }

  return (
    <>
      {/* <button type="button" onClick={getReviews}>
        Reviews
      </button> */}

      {reviews && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
