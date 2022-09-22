import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { Container } from '../Container';
import { AppBar } from '../AppBar';
import { Loader } from '../Loader';
// import { HomeView } from '../../pages/HomeView';
// import { MoviesView } from '../../pages/MoviesView';
// import { MovieDetailsView } from '../../pages/MovieDetailsView';
// import { MovieCastView } from '../../pages/MovieCastView';
// import { MovieReviewsView } from '../../pages/MovieReviewsView';
import './App.styled.jsx';

const HomeView = loadable(
  () => import(/* webpackPrefetch: true */ '../../pages/HomeView'),
  { fallback: <Loader /> },
);
const MoviesView = loadable(
  () => import(/* webpackPrefetch: true */ '../../pages/MoviesView'),
  { fallback: <Loader /> },
);
const MovieDetailsView = loadable(
  () => import(/* webpackPrefetch: true */ '../../pages/MovieDetailsView'),
  { fallback: <Loader /> },
);
const MovieCastView = loadable(
  () => import(/* webpackPrefetch: true */ '../../pages/MovieCastView'),
  { fallback: <Loader /> },
);
const MovieReviewsView = loadable(
  () => import(/* webpackPrefetch: true */ '../../pages/MovieReviewsView'),
  { fallback: <Loader /> },
);
const NotFoundView = loadable(
  () => import(/* webpackPrefetch: true */ '../../pages/NotFoundView'),
  { fallback: <Loader /> },
);

export function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/:movieId" element={<MovieDetailsView />}>
          <Route path="cast" element={<MovieCastView />} />
          <Route path="reviews" element={<MovieReviewsView />} />
        </Route>
        <Route path="/movies" element={<MoviesView />} />
        <Route path="/movies/:movieId" element={<MovieDetailsView />}>
          {/* <Route path="/movies/:id" element={<MovieDetailsView />}> */}
          <Route path="cast" element={<MovieCastView />} />
          <Route path="reviews" element={<MovieReviewsView />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Container>
  );
}

// <Routes>
//   <Route path='/' element={<SharedLayout />}>
//     <Route index element={<HomePage />} />
//     <Route path='contacts' element={<PrivateRoute><ContactsPage/></PrivateRoute>} />
//     <Route path='register' element={<PublicRoute restricted><RegisterPage/></PublicRoute>} />
//     <Route path='login' element={<PublicRoute restricted><LoginPage/></PublicRoute>} />
//   </Route>
//   <Route path="*" element={<HomePage />} />
// </Routes>
