import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {TAppDispatch, TState} from '../types/state.js';
import {TOffer, TReviews, TReviewData, TOfferPreview} from '../types/index.js';
import {setOffersDataLoadingStatus, redirectToRoute} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AppRoute} from '../const';
import {TAuthData} from '../types/auth-data';
import {TUserData} from '../types/user-data';
import {NameSpace} from '../const';

type TExtra = {
  extra: AxiosInstance;
}

export const fetchOffersAction = createAsyncThunk<TOfferPreview[], undefined, TExtra>(
  `${NameSpace.Offers}/fetchOffers`,
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<TOfferPreview[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    return data;
  },
);

export const fetchActiveOfferAction = createAsyncThunk<TOffer, TOffer['id'], TExtra>(
  `${NameSpace.Offer}/fetchActiveOffer`,
  async (offerId, {extra: api}) => {
    const { data } = await api.get<TOffer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  },
);

export const fetchNearPlacesAction = createAsyncThunk<TOfferPreview[], string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.NearPlaces}/fetchNearPlaces`,
  async (offerId, {extra: api}) => {
    const { data } = await api.get<TOfferPreview[]>(`${APIRoute.Offers}/${offerId}${APIRoute.NearPlaces}`);
    return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<TReviews[], TOffer['id'], TExtra>(
  `${NameSpace.Reviews}/fetchReviews`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<TReviews[]>(`${APIRoute.Reviews}/${offerId}`);
    return data;
  },
);

export const postReviewAction = createAsyncThunk<TReviews, TReviewData, TExtra>(
  `${NameSpace.Data}/postReview`,
  async ({id, rating, comment}, {extra: api}) => {
    const {data} = await api.post<TReviews>(`${APIRoute.Reviews}/${id}`, {comment, rating});
    return data;
  },
);

export const loginAction = createAsyncThunk<TUserData, TAuthData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/login`,
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<TUserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/logout`,
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const checkAuthAction = createAsyncThunk<TUserData, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, {extra: api}) => {
    const { data } = await api.get<TUserData>(APIRoute.Login);
    return data;
  },
);
