import React from 'react';
import ReactDOM from 'react-dom/client';
import { places } from './data/places';
import {App} from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App places={places}/>
  </React.StrictMode>
);