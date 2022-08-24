import { useState } from 'react';
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
