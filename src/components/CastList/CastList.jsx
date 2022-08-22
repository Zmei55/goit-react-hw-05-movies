import { CastListItem } from '../CastListItem';
import { List } from './CastList.styled';

export function CastList({ casts }) {
  return (
    <List>
      {casts.map(cast => (
        <CastListItem key={cast.id} cast={cast} />
      ))}
    </List>
  );
}
