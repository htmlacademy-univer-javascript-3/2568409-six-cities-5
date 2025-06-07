import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import CheckAuth from './pages/CheckAuth/CheckAuth';
import { Favorites } from './pages/Favorites/Favorites';
import { Offer } from './pages/Offer/Offer';
import { NotFound } from './pages/Errors/NotFound';
import { Login } from './pages/Login';
import { favorites } from './mocks/favorites.ts';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/favorites" element={<CheckAuth element={<Favorites places={favorites} />} isAuthorized={false}></CheckAuth>} />
      <Route path="/offer/:id" element={<Offer />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
