import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setActiveSortType, dropOffer, fetchFavorites, fetchNearPlaces, fetchOffers, fetchOffer} from './action';
import {offers} from '../mocks/mocks';
import {CityName, SortOption} from '../const';
import {TOffer, TOfferPreview, TReviews} from '../types';

type Data = {
  activeCity: string;
  offers: TOffer[];
  activeSortType: string;
  // nearPlaces: TOfferPreview[];
  // activeOffer: TOffer | null;
  favorites: TOfferPreview[];
  reviews: TReviews[];
};

const initialState: Data = {
  activeCity: CityName.Paris,
  offers,
  activeSortType: SortOption.Popular,
  // nearPlaces: [],
  // activeOffer: null,
  favorites: [],
  reviews: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    // .addCase(fetchOffer, (state, action) => {
    //   state.activeOffer = offers.find((offer) => offer.id === action.payload) ?? null;
    // })
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload.activeCity;
    })
    .addCase(setActiveSortType, (state, action) => {
      state.activeSortType = action.payload.activeSortType;
    })
    // .addCase(fetchNearPlaces, (state, action) => {
    //   state.nearPlaces = offers.filter((offer) => offer.id !== action.payload);
    // })
    // .addCase(dropOffer, (state) => {
    //   state.activeOffer = null;
    //   state.nearPlaces = [];
    // })
    .addCase(fetchFavorites, (state) => {
      state.favorites = state.offers.filter((offer) => offer.isFavorite);
    })

    // .addCase(fetchReviews, (state) => {
    //   state.reviews = reviews;
    // })
        // .addCase(fetchOffers, (state) => {
    //   state.offers = offers;
    // })
});

export {reducer};
