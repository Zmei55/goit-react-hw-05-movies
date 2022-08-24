import { useState } from 'react';
import PropTypes from 'prop-types';
import MoviesContext from './movies-context';

export function SearchProvider({ children }) {
  const [contextSearchQuery, setContextSearchQuery] = useState('');

  return (
    <MoviesContext.Provider
      value={{ contextSearchQuery, setContextSearchQuery }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.node,
};
