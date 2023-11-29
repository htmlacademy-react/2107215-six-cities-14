import axios, {AxiosInstance, InternalAxiosRequestConfig, AxiosError} from 'axios';
import {getToken} from './token';
import {StatusCodes} from 'http-status-codes';
import browserHistory from '../browser-history';
import {AppRoute} from '../const';

type TDetailMessageType = {
  type: string;
  message: string;
}

const BACKEND_URL = 'https://14.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
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
    (error: AxiosError<TDetailMessageType>) => {
      if (error.response?.status === StatusCodes.NOT_FOUND) {

        browserHistory.push(AppRoute.NotFound);
      }

      throw error;
    }
  );

  return api;
};
