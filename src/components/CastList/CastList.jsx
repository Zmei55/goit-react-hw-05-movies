import { getImgUrl } from '../../utils';
import PropTypes from 'prop-types';
import { List, ListItem, ProfileImg, ProfileName } from './CastList.styled';

export function CastList({ casts }) {
  return (
    <List>
      {casts.map(cast => (
        <ListItem key={cast.id}>
          <ProfileImg src={getImgUrl(cast.profile_path)} alt={cast.name} />
          <ProfileName>{cast.name}</ProfileName>
        </ListItem>
      ))}
    </List>
  );
}

CastList.propTypes = {
  cast: PropTypes.object,
};
