import {createAction} from '@reduxjs/toolkit';
import {ICity, IPlaceCard, IReview, IUserFull, IPlaceCardFull} from '../types.ts';
import {Actions, LoadingStatus} from '../constant.ts';

export const changeCity = createAction<ICity>(`${Actions.City}/change`);

export const fillOffers = createAction<IPlaceCard[]>(`${Actions.Offers}/fill`);
export const setOffersLoadingStatus = createAction<LoadingStatus>(`${Actions.Offers}/loading`);

export const setNearbyOffers = createAction<IPlaceCard[]>(`${Actions.Offers}/nearby`);
export const clearNearbyOffers = createAction(`${Actions.Offers}/clearNearby`);

export const setOffer = createAction<IPlaceCardFull>(`${Actions.Offer}/set`);
export const clearOffer = createAction(`${Actions.Offer}/clear`);
export const setOfferLoadingStatus = createAction<LoadingStatus>(`${Actions.Offer}/loading`);

export const setAuthorizationStatus = createAction<boolean>(`${Actions.User}/authorization`);
export const setUserData = createAction<IUserFull>(`${Actions.User}/setData`);
export const clearUserData = createAction(`${Actions.User}/clear`);

export const setComments = createAction<IReview[]>(`${Actions.Comment}/set`);
export const clearComments = createAction(`${Actions.Comment}/clear`);
export const setCommentsLoadingStatus = createAction<LoadingStatus>(`${Actions.Comment}/loading`);
