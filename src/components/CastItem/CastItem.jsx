import * as movieAPI from '../../services/movie-api';
import placeholder from '../../image/placeholder.png';

export function CastItem({ casts }) {
  function getProfileImgUrl(poster_path) {
    return poster_path !== null
      ? movieAPI.fetchImageFromMovie(poster_path)
      : placeholder;
  }

  return (
    <ul>
      {casts.map(cast => (
        <li key={cast.id}>
          <img src={getProfileImgUrl(cast.profile_path)} alt={cast.name} />
          <h4>{cast.name}</h4>
        </li>
      ))}
    </ul>
  );
}
