export function Reviews({ reviews }) {
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h4>Author: {review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
