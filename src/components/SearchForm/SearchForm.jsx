import { useState, useContext } from 'react';
import MoviesContext from '../../context/movies/movies-context';
import { Form, Input, Button } from './SearchForm.styled';

export function SearchForm() {
  const [searchQuery, setSearchQuery] = useState('');
  const { setContextSearchQuery } = useContext(MoviesContext);

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setContextSearchQuery(searchQuery.toLowerCase());
    setSearchQuery('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" value={searchQuery} onChange={handleChange} />
      <Button type="submit">Search</Button>
    </Form>
  );
}
