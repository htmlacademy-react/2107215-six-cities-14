import {NameSpace} from '../const';
import {createAction} from '@reduxjs/toolkit';
import {TOffer} from '../types';

export const changeCity = createAction<{activeCity: string}>(`${NameSpace.Offers}/changeCity`);

export const setActiveSortType = createAction<{activeSortType: string}>(`${NameSpace.Offers}/setActiveSortType`);


export const fetchOffer = createAction<string>(`${NameSpace.Offers}/fetchOffers`);

export const fetchNearPlaces = createAction<TOffer['id']>(`${NameSpace.NearPlaces}/fetchNearPlaces`);

export const dropOffer = createAction(`${NameSpace.Offer}/dropOffer`);

export const fetchFavorites = createAction(`${NameSpace.Favorites}/fetchFavorites`);

export const fetchOffers = createAction(`${NameSpace.Offers}/fetchOffers`)
// export const fetchReviews = createAction<TOffer['id']>(`${NameSpace.Reviews}/fetchReviews`);

