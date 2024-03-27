import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const Campers = lazy(() => import('pages/Campers/Campers'));
const Favorites = lazy(() => import('pages/Favorites/Favorites'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Campers />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
