import {AppDispatch} from '../states.ts';
import {State} from 'history';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {fillOffers, setUserData, setOffersLoadingStatus, setAuthorizationStatus} from './action.ts';
import {IPlaceCard, IAuthData, IUserFull} from '../types.ts';
import {Actions, API_ROUTES} from '../constant.ts';
import {StatusCodes} from 'http-status-codes';
import {dropToken, saveToken} from '../api/token.ts';

type DispatchStateExtra = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const userLogin = createAsyncThunk<void, IAuthData, DispatchStateExtra> (
  `${Actions.USER}/login`,
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
  `${Actions.USER}/logout`,
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(API_ROUTES.USER.LOGOUT);
    dispatch(setAuthorizationStatus(false));
    dispatch(setUserData(null));
    dropToken();
  },
);

export const userCheckAuth = createAsyncThunk<void, undefined, DispatchStateExtra>(
  `${Actions.USER}/login`,
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<IUserFull>(API_ROUTES.USER.VALIDATE);
      dispatch(setAuthorizationStatus(true));
      dispatch(setUserData(data));
      saveToken(data.token);
    } catch {
      dispatch(setAuthorizationStatus(false));
      dispatch(setUserData(null));
    }
  },
);

export const fetchOffers = createAsyncThunk<void, undefined, DispatchStateExtra>(
  `${Actions.OFFERS}/fetch`,
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<IPlaceCard[]>(API_ROUTES.OFFERS.ALL);
    dispatch(fillOffers(data));
    dispatch(setOffersLoadingStatus(false));
  },
);
