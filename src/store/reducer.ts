import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setActiveSortType, fetchFavorites, fetchOffers, requireAuthorization, dropOffer, setOffersDataLoadingStatus} from './action';
import {TOffer, TOfferPreview, TReviews} from '../types';
import {AuthorizationStatus, Status, CityName, SortOption} from '../const';
import {
  fetchActiveOfferAction,
  fetchOffersNearbyAction
} from './api-actions';

type Data = {
  activeCity: string;
  offers: TOffer[];
  activeSortType: string;
  nearPlaces: TOffer[];
  activeOffer: TOffer | null;
  favorites: TOfferPreview[];
  reviews: TReviews[];
  authorizationStatus: AuthorizationStatus;
  isDataLoading: boolean;
  statusOffer: Status;
};

const initialState: Data = {
  activeCity: CityName.Paris,
  offers: [],
  activeSortType: SortOption.Popular,
  nearPlaces: [],
  activeOffer: null,
  favorites: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
  statusOffer: Status.Idle,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload.activeCity;
    })
    .addCase(setActiveSortType, (state, action) => {
      state.activeSortType = action.payload.activeSortType;
    })
    .addCase(dropOffer, (state) => {
      state.activeOffer = null;
      state.nearPlaces = [];
    })
    .addCase(fetchFavorites, (state) => {
      state.favorites = state.offers.filter((offer) => offer.isFavorite);
    })
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    // .addCase(fetchReviews, (state) => {
    //   state.reviews = reviews;
    // })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(fetchActiveOfferAction.pending, (state) => {
      state.statusOffer = Status.Loading;
    })
    .addCase(fetchActiveOfferAction.fulfilled, (state, action) => {
      state.activeOffer = action.payload;
      state.statusOffer = Status.Success;
    })
    .addCase(fetchActiveOfferAction.rejected, (state) => {
      state.statusOffer = Status.Error;
    })
    .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
      state.nearPlaces = action.payload;
    });

});

export {reducer};
