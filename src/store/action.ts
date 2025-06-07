import {createAction} from '@reduxjs/toolkit';
import {ICity, IPlaceCard, IUserFull} from '../types.ts';
import {Actions} from '../constant.ts';

export const setCity = createAction<{city: ICity}>('setCity');
export const setOffers = createAction<{offers: IPlaceCard[]}>('setOffers');
export const changeCity = createAction<ICity>(`${Actions.CITY}/change`);

export const fillOffers = createAction<IPlaceCard[]>(`${Actions.OFFERS}/fill`);
export const setOffersLoadingStatus = createAction<boolean>(`${Actions.OFFERS}/loading`);

export const setAuthorizationStatus = createAction<boolean>(`${Actions.USER}/authorization`);
export const setUserData = createAction<IUserFull | null>(`${Actions.USER}/setData`);
