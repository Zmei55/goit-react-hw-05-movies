import { useState } from 'react';
import MoviesContext from './movies-context';

export function Provider({ children }) {
  const [contextSearchQuery, setContextSearchQuery] = useState('');

  return (
    <MoviesContext.Provider
      value={{ contextSearchQuery, setContextSearchQuery }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
