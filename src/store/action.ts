import {createAction} from '@reduxjs/toolkit';
import {ICity, IPlaceCard} from '../types.ts';

export const setCity = createAction<{city: ICity}>('setCity');
export const setOffers = createAction<{offers: IPlaceCard[]}>('setOffers');
