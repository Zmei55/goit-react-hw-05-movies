import { Button } from './IconButton.styled';

export function IconButton({ children, ...allyProps }) {
  return <Button {...allyProps}>{children}</Button>;
}

// IconButton.propTypes = {
//   onClick: PropTypes.func,
//   children: PropTypes.node,
//   'aria-label': PropTypes.string.isRequired,
// };
