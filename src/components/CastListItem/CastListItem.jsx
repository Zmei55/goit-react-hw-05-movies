import { getImgUrl } from '../../utils';
import { ListItem, ProfileImg, ProfileName } from './CastListItem.styled';

export function CastListItem({ cast }) {
  const profileImg = getImgUrl(cast.profile_path);

  return (
    <ListItem>
      <ProfileImg src={profileImg} alt={cast.name} />
      <ProfileName>{cast.name}</ProfileName>
    </ListItem>
  );
}
