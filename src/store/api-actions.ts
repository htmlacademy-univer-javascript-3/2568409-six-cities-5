import {AppDispatch, State} from '../states.ts';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {fillOffers, setUserData, setOffersLoadingStatus, setAuthorizationStatus, setNearbyOffers, setOfferLoadingStatus, setOffer, clearUserData, setComments, setCommentsLoadingStatus} from './action.ts';
import {IPlaceCard, IAuthData, IUserFull, IPlaceCardFull, IReviewFormState, IReview} from '../types.ts';
import {Actions, API_ROUTES, LoadingStatus} from '../constant.ts';
import {StatusCodes} from 'http-status-codes';
import {dropToken, saveToken} from '../api/token.ts';

type DispatchStateExtra = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const userLogin = createAsyncThunk<void, IAuthData, DispatchStateExtra> (
  `${Actions.User}/login`,
  async ({ email, password }, { dispatch, extra: api }) => {
    const {status, data} = await api.post<IUserFull>(API_ROUTES.USER.LOGIN, {
      email,
      password,
    });

    if (status === Number(StatusCodes.CREATED)) {
      dispatch(setAuthorizationStatus(true));
      dispatch(setUserData(data));
      saveToken(data.token);
    } else {
      dispatch(setAuthorizationStatus(false));
    }
  }
);

export const userLogout = createAsyncThunk<void, undefined, DispatchStateExtra>(
  `${Actions.User}/logout`,
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(API_ROUTES.USER.LOGOUT);
    dispatch(setAuthorizationStatus(false));
    dispatch(clearUserData());
    dropToken();
  },
);

export const userCheckAuth = createAsyncThunk<void, undefined, DispatchStateExtra>(
  `${Actions.User}/login`,
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<IUserFull>(API_ROUTES.USER.VALIDATE);
      dispatch(setAuthorizationStatus(true));
      dispatch(setUserData(data));
      saveToken(data.token);
    } catch {
      dispatch(setAuthorizationStatus(false));
      dispatch(clearUserData());
    }
  },
);

export const fetchOffers = createAsyncThunk<void, undefined, DispatchStateExtra>(
  `${Actions.Offers}/fetch`,
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(LoadingStatus.Pending));
    const {data} = await api.get<IPlaceCard[]>(API_ROUTES.OFFERS.ALL);
    dispatch(fillOffers(data));
    dispatch(setOffersLoadingStatus(LoadingStatus.Success));
  },
);

export const fetchOffer = createAsyncThunk<void, string, DispatchStateExtra>(
  `${Actions.Offer}/fetch`,
  async (id, { dispatch, extra: api }) => {
    dispatch(setOfferLoadingStatus(LoadingStatus.Pending));

    const { status, data } = await api.get<IPlaceCardFull>(API_ROUTES.OFFERS.EXACT(id));

    if (status === Number(StatusCodes.NOT_FOUND)) {
      dispatch(setOfferLoadingStatus(LoadingStatus.Failure));
      return;
    }

    dispatch(setOffer(data));
    dispatch(setOfferLoadingStatus(LoadingStatus.Success));
  },
);

export const fetchOffersNearby = createAsyncThunk<void, string, DispatchStateExtra>(
  `${Actions.Offers}/nearby`,
  async (id, { dispatch, extra: api }) => {
    dispatch(setOffersLoadingStatus(LoadingStatus.Pending));
    const { data: nearbyOffers } = await api.get<IPlaceCard[]>(API_ROUTES.OFFERS.NEARBY(id));
    dispatch(setNearbyOffers(nearbyOffers));
    dispatch(setOffersLoadingStatus(LoadingStatus.Success));
  },
);

export const fetchComments = createAsyncThunk<void, string, DispatchStateExtra>(
  `${Actions.Comment}/fetch`,
  async (id, { dispatch, extra: api }) => {
    dispatch(setOffersLoadingStatus(LoadingStatus.Pending));
    const { data: comments } = await api.get<IReview[]>(API_ROUTES.COMMENTS.GET(id));
    dispatch(setComments(comments));
    dispatch(setCommentsLoadingStatus(LoadingStatus.Success));
  },
);

export const createComment = createAsyncThunk<void, { form: IReviewFormState } & { offerId: string }, DispatchStateExtra>(
  `${Actions.Comment}/create`,
  async ({ offerId, form }, { dispatch, getState, extra: api }) => {
    const { status } = await api.post<IReviewFormState>(API_ROUTES.COMMENTS.POST(offerId), form);

    const state = getState();

    if (status === Number(StatusCodes.CREATED) && state.offer?.id === offerId) {
      dispatch(fetchComments(offerId));
    }
  },
);
