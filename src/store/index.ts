import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';
import { createAPI } from '../api/api';

const api = createAPI();

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
