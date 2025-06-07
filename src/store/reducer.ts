import {createReducer} from '@reduxjs/toolkit';
import {setCity, setOffers} from './action.ts';
import {offers} from '../mocks/offers.ts';
import {cities} from '../mocks/cities.ts';

const initialState = {
  city: cities.Paris,
  offers: offers.filter((o) => o.city.name === 'Paris'),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      const {city} = action.payload;
      state.city = city;
    })
    .addCase(setOffers, (state, action) => {
      const offersCur = action.payload.offers;

      state.offers = offersCur;
    });
});

export {reducer};
