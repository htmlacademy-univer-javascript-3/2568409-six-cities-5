import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './store';
import { App } from './App';
import {fetchOffers, userCheckAuth} from './store/api-actions.ts';
import {ToastContainer} from 'react-toastify';

(function initApp() {
  store.dispatch(fetchOffers());
  store.dispatch(userCheckAuth());
})();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
