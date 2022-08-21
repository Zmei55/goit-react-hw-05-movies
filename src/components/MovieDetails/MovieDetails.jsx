// import { useState, useEffect } from 'react';
import * as movieAPI from '../../services/movie-api';
import placeholder from '../../image/placeholder.png';

export function MovieDetails({ movie }) {
  const { poster_path, title, vote_average, release_date, overview, genres } =
    movie;

  // useEffect(() => {
  //   function posterImgUrl(path) {
  //     return poster_path !== null
  //       ? movieAPI.fetchImageFromMovie(path)
  //       : placeholder;
  //   }
  // })

  function posterImgUrl(path) {
    return poster_path !== null
      ? movieAPI.fetchImageFromMovie(path)
      : placeholder;
  }

  return (
    <>
      {movie && (
        <div>
          <img src={posterImgUrl(poster_path)} alt={title} />
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
    </>
  );
}
