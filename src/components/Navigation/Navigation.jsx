import { Nav, Navlink } from './Navigation.styled';

export function Navigation() {
  return (
    <Nav>
      <Navlink to="/">Home</Navlink>
      <Navlink to="/movies">Movies</Navlink>
    </Nav>
  );
}
