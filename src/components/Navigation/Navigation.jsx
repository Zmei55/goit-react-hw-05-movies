import { Nav, Link } from './Navigation.styled';

export function Navigation() {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </Nav>
  );
}
