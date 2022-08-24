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
import { getImgUrl } from '../utils';
// import { Button } from '../components/Button';
// import { MovieDetails } from '../components/MovieDetails';
// import { MovieCastView } from '../pages/MovieCastView';
// import { MovieReviewsView } from '../pages/MovieReviewsView';

export function MovieDetailsView() {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  // const [casts, setCasts] = useState('');
  // const [reviews, setReviews] = useState('');

  useEffect(() => {
    movieAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  function onGoBack() {
    navigate(location?.state?.from ?? '/');
  }

  // function getCasts() {
  //   movieAPI.fetchCastFromMovie(movieId).then(res => setCasts(res.cast));
  // }

  // function getReviews() {
  //   movieAPI
  //     .fetchReviewsFromMovie(movieId)
  //     .then(res => setReviews(res.results));
  // }

  return (
    <>
      <button type="button" onClick={onGoBack}>
        Back
      </button>
      {movie && (
        <>
          <img
            src={getImgUrl(movie.poster_path)}
            alt={movie.title}
            width="300"
          />
          <div>
            <h2>{`${movie.title} (${movie.release_date.substring(0, 4)})`}</h2>
            <p>{`User Score: ${Math.round(movie.vote_average * 10)}%`}</p>
            <div>
              <h3>Overview:</h3>
              <p>{movie.overview}</p>
            </div>
            <h3>
              Genres
              <ul>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </h3>
          </div>
        </>
      )}
      <hr />

      {/* <button type="button" onClick={getCasts}>
        Cast
      </button> */}
      {/* <button type="button" onClick={getReviews}>
        Reviews
      </button> */}

      {/* {casts && (
        <ul>
          {casts.map(cast => (
            <li key={cast.id}>
              <img
                src={getImgUrl(cast.profile_path)}
                alt={cast.name}
                width="200"
              />
              <h4>{cast.name}</h4>
            </li>
          ))}
        </ul>
      )} */}

      {/* {reviews && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )} */}
    </>
  );
}
