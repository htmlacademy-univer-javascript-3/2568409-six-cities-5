import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Импортируем CSS-файл

export const NotFound: React.FC = () => (
  <div className="container_not_found">
    <h1 className="header_not_found">404</h1>
    <p className="text_not_found">Oops! Page not found.</p>
    <Link to="/" className="link_not_found">Go back to Home</Link>
  </div>
);
