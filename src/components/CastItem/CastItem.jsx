import * as movieAPI from '../../services/movie-api';
import placeholder from '../../image/placeholder.png';
import {
  CastList,
  CastListItem,
  ProfileImg,
  ProfileName,
} from './CastItem.styled';

export function CastItem({ casts }) {
  function getProfileImgUrl(poster_path) {
    return poster_path !== null
      ? movieAPI.fetchImageFromMovie(poster_path)
      : placeholder;
  }

  return (
    <CastList>
      {casts.map(cast => (
        <CastListItem key={cast.id}>
          <ProfileImg
            src={getProfileImgUrl(cast.profile_path)}
            alt={cast.name}
          />
          <ProfileName>{cast.name}</ProfileName>
        </CastListItem>
      ))}
    </CastList>
  );
}
