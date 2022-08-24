import PropTypes from 'prop-types';
import {
  ReviewList,
  ReviewListItem,
  AuthorName,
  ReviewText,
} from './Reviews.styled';

export function Reviews({ reviews }) {
  return (
    <ReviewList>
      {reviews.map(review => (
        <ReviewListItem key={review.id}>
          <AuthorName>Author: {review.author}</AuthorName>
          <ReviewText>{review.content}</ReviewText>
        </ReviewListItem>
      ))}
    </ReviewList>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.array,
};
