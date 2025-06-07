import React from 'react';
import { Main } from './pages/Main/Main';
import {IPlaceCard} from './types';

type AppProps = {
  places: IPlaceCard[];
}

export const App: React.FC<AppProps> = ({places}) => (
  <Main places={places}/>
);
