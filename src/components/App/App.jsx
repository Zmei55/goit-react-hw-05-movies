import { Routes, Route } from 'react-router-dom';
import { Container } from '../Container';
import { AppBar } from '../AppBar';
import { HomeView } from '../../pages/HomeView';
import { MoviesView } from '../../pages/MoviesView';
import { MoviesPage } from '../MoviesPage';
import { MovieDetailsPage } from '../MovieDetailsPage';
import { Cast } from '../Cast';
import { Reviews } from '../Reviews';
import './App.styled.jsx';

export function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/movies" element={<MoviesView />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieDetailsPage />} />
          <Route path=":movieId" element={<MovieDetailsPage />} />
        </Route> */}
      </Routes>
    </Container>
  );
}
