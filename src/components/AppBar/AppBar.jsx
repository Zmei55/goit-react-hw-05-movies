import { Navigation } from '../Navigation';
import { SearchForm } from '../SearchForm';
import { Header } from './AppBar.styled';

export function AppBar() {
  return (
    <Header>
      <Navigation />
      <SearchForm />
    </Header>
  );
}
