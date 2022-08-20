import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../../services/movie-api';

export function MovieDetailsPage(params) {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const { poster_path, title, vote_average, release_date, overview, genres } =
    movie;

  console.log(movie);
  useEffect(() => {
    // if (movieId === '') {
    //   return;
    // }

    movieAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <div>
          <img src={poster_path} alt={title} width="" />
          <div>
            <h2>
              {title}
              <span>{release_date.substring(0, 4)}</span>
            </h2>
            <p>
              User Score:
              <span>{`${vote_average * 10}%`}</span>
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
    </>
  );
}
