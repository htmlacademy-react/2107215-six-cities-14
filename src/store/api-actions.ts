import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {TAppDispatch, TState} from '../types/state.js';
import {TOffer, TReviews, TReviewData, TOfferPreview, TFavoriteData} from '../types/index.js';
import {redirectToRoute} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AppRoute} from '../const';
import {TLoginData} from '../types/login-data.js';
import {TUserData} from '../types/user-data';
import {NameSpace} from '../const';
import {toast} from 'react-toastify';

type TExtra = {
  extra: AxiosInstance;
}

export const fetchOffersAction = createAsyncThunk<TOfferPreview[], undefined, TExtra>(
  `${NameSpace.Offers}/fetchOffers`,
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<TOfferPreview[]>(APIRoute.Offers);
      return data;
    } catch(err) {
      toast.warn('Error loading offers.');
      throw err;
    }
  },
);

export const fetchActiveOfferAction = createAsyncThunk<TOffer, TOffer['id'], TExtra>(
  `${NameSpace.Offer}/fetchActiveOffer`,
  async (offerId, {extra: api}) => {
    try {
      const { data } = await api.get<TOffer>(`${APIRoute.Offers}/${offerId}`);
      return data;
    } catch(err) {
      toast.warn('Offer loading error.');
      throw err;
    }
  },
);

export const fetchNearPlacesAction = createAsyncThunk<TOfferPreview[], string, TExtra>(
  `${NameSpace.NearPlaces}/fetchNearPlaces`,
  async (offerId, {extra: api}) => {
    try {
      const { data } = await api.get<TOfferPreview[]>(`${APIRoute.Offers}/${offerId}${APIRoute.NearPlaces}`);
      return data;
    } catch(err) {
      toast.warn('Error loading offers nearby.');
      throw err;
    }
  }
);

export const fetchReviewsAction = createAsyncThunk<TReviews[], TOffer['id'], TExtra>(
  `${NameSpace.Reviews}/fetchReviews`,
  async (offerId, {extra: api}) => {
    try {
      const {data} = await api.get<TReviews[]>(`${APIRoute.Reviews}/${offerId}`);
      return data;
    } catch(err) {
      toast.warn('Error loading comment.');
      throw err;
    }
  },
);

export const postReviewAction = createAsyncThunk<TReviews, TReviewData, TExtra>(
  `${NameSpace.Reviews}/postReview`,
  async ({id, rating, comment}, {extra: api}) => {
    try {
      const {data} = await api.post<TReviews>(`${APIRoute.Reviews}/${id}`, {comment, rating});
      return data;
    } catch(err) {
      toast.warn('Error sending a comment.');
      throw err;
    }
  },
);

export const fetchFavoritesAction = createAsyncThunk<TOfferPreview[], undefined, TExtra>(
  `${NameSpace.Favorites}/fetchFavorites`,
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<TOfferPreview[]>(APIRoute.Favorite);
      return data;
    } catch(err) {
      toast.warn('Error loading selected offers.');
      throw err;
    }
  },
);

export const changeFavoriteStatusAction = createAsyncThunk<TOfferPreview, TFavoriteData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Favorites}/postFavorite`,
  async ({ id, status }, {dispatch, extra: api }) => {
    try {
      const { data } = await api.post<TOffer>(`${APIRoute.Favorite}/${id}/${status}`);
      return data;
    } catch(err) {
      dispatch(redirectToRoute(AppRoute.Login));
      throw err;
    }
  }
);

export const loginAction = createAsyncThunk<TUserData, TLoginData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/login`,
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<TUserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    dispatch(fetchFavoritesAction());
    dispatch(fetchOffersAction());
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/logout`,
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(fetchOffersAction());
  },
);

export const checkAuthAction = createAsyncThunk<TUserData, undefined, TExtra>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, {extra: api}) => {
    const { data } = await api.get<TUserData>(APIRoute.Login);
    return data;
  },
);
