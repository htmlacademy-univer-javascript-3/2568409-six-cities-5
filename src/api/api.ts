import axios, {AxiosError, AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import {toast} from 'react-toastify';
import {getToken} from './token.ts';
import {IErrorMessage} from '../types.ts';

const API_URL = 'https://14.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<IErrorMessage>) => {
      if (error.response) {
        const message = error.response.data;

        // eslint-disable-next-line
        console.error(message.message);
        // eslint-disable-next-line
        toast.error(message.message);
      }

      return error.response;
    },
  );

  return api;
};
