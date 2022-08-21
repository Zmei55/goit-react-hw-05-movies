import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../services/movie-api';
import { MovieCastView } from '../pages/MovieCastView';
import { MovieReviewsView } from '../pages/MovieReviewsView';

export function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const { poster_path, title, vote_average, release_date, overview, genres } =
    movie;
  const posterImgUrl = movieAPI.fetchImageFromMovie(poster_path);

  useEffect(() => {
    movieAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  // console.log(movie);

  return (
    <>
      {movie && (
        <div>
          <img src={posterImgUrl} alt={title} width="" />
          <div>
            <h2>
              {title}
              <span>{release_date.substring(0, 4)}</span>
            </h2>
            <p>
              User Score:
              <span>{`${Math.round(vote_average * 10)}%`}</span>
            </p>
            <h3>
              Overview:
              <p>{overview}</p>
            </h3>
            <h3>
              Genres
              <ul>
                {genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </h3>
          </div>
        </div>
      )}
      <hr />

      <MovieCastView />

      <MovieReviewsView />
    </>
  );
}
