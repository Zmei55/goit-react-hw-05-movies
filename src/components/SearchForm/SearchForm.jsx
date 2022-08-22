import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MoviesContext from '../../context/movies/movies-context';
import { IconButton } from '../IconButton';
import { ImSearch } from 'react-icons/im';
import { Form, Input } from './SearchForm.styled';

export function SearchForm() {
  const [searchQuery, setSearchQuery] = useState('');
  const { setContextSearchQuery } = useContext(MoviesContext);
  const navigate = useNavigate();

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setContextSearchQuery(searchQuery.toLowerCase());
    navigate('/movies');
    setSearchQuery('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <IconButton type="submit">
        <ImSearch />
      </IconButton>

      <Input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        autoFocus
        placeholder="What movie would you like to see?"
      />
    </Form>
  );
}
