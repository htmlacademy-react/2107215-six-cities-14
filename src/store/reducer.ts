import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setActiveSortType, fetchFavorites, dropOffer} from './action';
import {TUserData, TOffer, TOfferPreview, TReviews} from '../types';
import {AuthorizationStatus, Status, CityName, SortOption} from '../const';
import {
  fetchActiveOfferAction,
  fetchNearPlacesAction,
  fetchReviewsAction,
  postReviewAction,
  fetchOffersAction,
  checkAuthAction,
  loginAction,
  logoutAction
} from './api-actions';

type Data = {
  activeCity: CityName;
  offers: TOfferPreview[];
  activeSortType: string;
  nearPlaces: TOfferPreview[];
  activeOffer: TOffer | null;
  favorites: TOfferPreview[];
  reviews: TReviews[];
  authorizationStatus: AuthorizationStatus;
  statusOffer: Status;
  statusPost: Status;
  statusOffers: Status;
  statusLogin: Status;
  user: TUserData | null;
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
  statusOffer: Status.Idle,
  statusPost: Status.Idle,
  statusOffers: Status.Idle,
  statusLogin: Status.Idle,
  user: null,
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
      // state.nearPlaces = [];
    })
    .addCase(fetchFavorites, (state) => {
      state.favorites = state.offers.filter((offer) => offer.isFavorite);
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.statusOffers = Status.Success;
    })
    .addCase(fetchOffersAction.pending, (state) => {
      state.statusOffers = Status.Loading;
    })
    // .addCase(requireAuthorization, (state, action) => {
    //   state.authorizationStatus = action.payload;
    // })
    // .addCase(setOffersDataLoadingStatus, (state, action) => {
    //   state.isDataLoading = action.payload;
    // })
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
    .addCase(fetchNearPlacesAction.fulfilled, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(fetchReviewsAction.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.statusPost = Status.Success;
    })
    .addCase(postReviewAction.pending, (state) => {
      state.statusPost = Status.Loading;
    })
    .addCase(postReviewAction.rejected, (state) => {
      state.statusPost = Status.Error;
    })
    .addCase(postReviewAction.fulfilled, (state, action) => {
      state.reviews.push(action.payload);
      state.statusPost = Status.Success;
    })
    // .addCase(dropReview.fulfilled, (state) => {
    //   state.statusPost = Status.Idle;
    // })

    .addCase(loginAction.rejected, (state) => {
      state.statusLogin = Status.Error;
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginAction.pending, (state) => {
      state.statusLogin = Status.Loading;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.statusLogin = Status.Success;
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(logoutAction.pending, (state) => {
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    // .addCase(dropLogin, (state) => {
    //   state.statusLogin = RequestStatus.Idle;
    // })
    .addCase(checkAuthAction.rejected, (state) => {
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(checkAuthAction.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(checkAuthAction.pending, (state) => {
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.Unknown;
    });
});

export {reducer};
