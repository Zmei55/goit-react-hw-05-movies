import { Routes, Route } from 'react-router-dom';
import { Container } from '../Container';
import { AppBar } from '../AppBar';
import { HomeView } from '../../pages/HomeView';
import { MoviesPage } from '../MoviesPage';
import './App.styled.jsx';

export function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </Container>
  );
}
