import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../services/movie-api';
import { getImgUrl } from '../utils';
// import { CastList } from '../components/CastList';

export function MovieCastView() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState('');

  useEffect(() => {
    movieAPI.fetchCastFromMovie(movieId).then(res => setCasts(res.cast));
  }, [movieId]);

  // function getCasts() {
  //   movieAPI.fetchCastFromMovie(movieId).then(res => setCasts(res.cast));
  // }

  return (
    <>
      {/* <button type="button" onClick={getCasts}>
        Cast
      </button> */}

      {casts && (
        <ul>
          {casts.map(cast => (
            <li key={cast.id}>
              <img
                src={getImgUrl(cast.profile_path)}
                // src={cast.profile_path}
                alt={cast.name}
                width="200"
              />
              <h4>{cast.name}</h4>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
