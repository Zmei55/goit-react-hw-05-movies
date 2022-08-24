import { Routes, Route } from 'react-router-dom';
import { Container } from '../Container';
import { AppBar } from '../AppBar';
import { HomeView } from '../../pages/HomeView';
import { MoviesView } from '../../pages/MoviesView';
import { MovieDetailsView } from '../../pages/MovieDetailsView';
import './App.styled.jsx';

export function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/:movieId" element={<MovieDetailsView />} />
        <Route path="/movies" element={<MoviesView />} />
        <Route path="/movies/:movieId" element={<MovieDetailsView />}></Route>
      </Routes>
    </Container>
  );
}
