import {
  LinksList,
  LinksListItem,
  LinkRouter,
} from './MovieDetailsLinks.styled';

export function MovieDetailsLinks() {
  return (
    <LinksList>
      <LinksListItem>
        <LinkRouter to="cast">Cast</LinkRouter>
      </LinksListItem>
      <LinksListItem>
        <LinkRouter to="reviews">Reviews</LinkRouter>
      </LinksListItem>
    </LinksList>
  );
}
