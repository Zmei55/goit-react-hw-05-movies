import * as movieAPI from '../services/movie-api';
import placeholder from '../image/placeholder.png';

export function getImgUrl(path) {
  return path !== null ? movieAPI.fetchImageFromMovie(path) : placeholder;
}
