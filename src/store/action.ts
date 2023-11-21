import {createAction} from '@reduxjs/toolkit';
import {TAppRoute} from '../types/index';
// import {AuthorizationStatus} from '../const';
// import {NameSpace, CityName} from '../const';


// export const changeCity = createAction<{activeCity: CityName}>(`${NameSpace.Offers}/changeCity`);

// export const setActiveSortType = createAction<{activeSortType: string}>(`${NameSpace.Offers}/setActiveSortType`);

// export const dropOffer = createAction(`${NameSpace.Offer}/dropOffer`);

// export const fetchFavorites = createAction(`${NameSpace.Favorites}/fetchFavorites`);

// export const fetchOffers = createAction<TOffer[]>(`${NameSpace.Offers}/fetchOffers`);

// export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

// export const setOffersDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const redirectToRoute = createAction<TAppRoute>('redirectToRoute');

