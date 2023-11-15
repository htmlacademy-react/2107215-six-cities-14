import {NameSpace} from '../const';
import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../const';
import {TOffer, TAppRoute} from '../types/index';

export const changeCity = createAction<{activeCity: string}>(`${NameSpace.Offers}/changeCity`);

export const setActiveSortType = createAction<{activeSortType: string}>(`${NameSpace.Offers}/setActiveSortType`);

export const fetchNearPlaces = createAction<TOffer['id']>(`${NameSpace.NearPlaces}/fetchNearPlaces`);

export const dropOffer = createAction(`${NameSpace.Offer}/dropOffer`);

export const fetchFavorites = createAction(`${NameSpace.Favorites}/fetchFavorites`);

export const fetchOffers = createAction<TOffer[]>(`${NameSpace.Offers}/fetchOffers`);
// export const fetchReviews = createAction<TOffer['id']>(`${NameSpace.Reviews}/fetchReviews`);

// export const loadQuestions = createAction<Questions>('data/loadQuestions');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const redirectToRoute = createAction<TAppRoute>('redirectToRoute');

// export const loadCurrentOffer = (offer: TOffer) => ({
//   type: NameSpace.Offer,
//   payload: offer,
// });

