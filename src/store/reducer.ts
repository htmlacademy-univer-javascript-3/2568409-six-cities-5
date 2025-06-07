import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffers, setOffersLoadingStatus} from './action.ts';
import {CITIES} from '../constant.ts';
import {ICity, IPlaceCard} from '../types.ts';

type InitialState = {
  city: ICity;
  offers: IPlaceCard[];
  isOffersDataLoading: boolean;
};

const initialState:InitialState = {
  city: CITIES.Paris,
  offers: [],
  isOffersDataLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};
