import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { IPlaceCard } from './types';
import CheckAuth from './pages/CheckAuth/CheckAuth';
import { Favorites } from './pages/Favorites/Favorites';
import { Offer } from './pages/Offer/Offer';
import { NotFound } from './pages/Errors/NotFound';
import { Login } from './pages/Login';

type AppProps = {
  places: IPlaceCard[];
}

export const App: React.FC<AppProps> = ({ places }) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main places={places} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/favorites" element={<CheckAuth element={<Favorites places={places} />} isAuthorized={false}></CheckAuth>} />
      <Route path="/offer/:id" element={<Offer />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
