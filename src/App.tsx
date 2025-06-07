import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import {PrivateRoute} from './pages/PrivateRoute/CheckAuth.tsx';
import { Favorites } from './pages/Favorites/Favorites';
import { Offer } from './pages/Offer/Offer';
import { NotFound } from './pages/Errors/NotFound';
import { Login } from './pages/Login';
import { favorites } from './mocks/favorites.ts';
import {AppRoute} from './types.ts';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main} element={<Main/>}/>
      <Route path={AppRoute.Login} element={<Login/>}/>
      <Route path={AppRoute.Favorites} element={
        <PrivateRoute>
          <Favorites places={favorites}/>
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.Offer} element={<Offer/>}/>
      <Route path={'*'} element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
);
