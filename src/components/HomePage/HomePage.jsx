import { useState, useEffect } from 'react';

const API_KEY = '10b265f78a46c9fbbc3d17a53742f030';
const BASE_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

export function HomePage(params) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(new Error('Error'));
      })
      .then(movies => setMovies(movies.results))
      .catch();
  }, []);

  console.log(movies);

  return (
    <>
      <h1>Trending today</h1>

      <ul>
        {movies && movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
      </ul>
    </>
  );
}
