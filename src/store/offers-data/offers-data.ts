import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, RequestStatus} from '../../const';
import {TOfferPreview, TOffer} from '../../types/index';
import {
  fetchOffersAction,
  fetchActiveOfferAction,
  fetchNearPlacesAction,
  changeFavoriteStatusAction,
} from '../api-actions';

type TOffersData = {
  offers: TOfferPreview[];
  nearPlaces: TOfferPreview[];
  activeOffer: TOffer | null;
  offerStatus: RequestStatus;
  fetchingStatus: RequestStatus;
  nearPlacesStatus: RequestStatus;
};

const initialState: TOffersData = {
  offers: [],
  nearPlaces: [],
  activeOffer: null,
  offerStatus: RequestStatus.Idle,
  fetchingStatus: RequestStatus.Idle,
  nearPlacesStatus: RequestStatus.Idle,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    dropOffer: (state) => {
      state.activeOffer = null;
      state.nearPlaces = [];
    },
    dropOffersFavorite: (state) => {
      state.offers.forEach((item) => {
        item.isFavorite = false;
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.fetchingStatus = RequestStatus.Success;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.fetchingStatus = RequestStatus.Loading;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.fetchingStatus = RequestStatus.Error;
      })
      .addCase(fetchActiveOfferAction.pending, (state) => {
        state.offerStatus = RequestStatus.Loading;
      })
      .addCase(fetchActiveOfferAction.fulfilled, (state, action) => {
        state.activeOffer = action.payload;
        state.offerStatus = RequestStatus.Success;
      })
      .addCase(fetchActiveOfferAction.rejected, (state) => {
        state.offerStatus = RequestStatus.Error;
      })
      .addCase(fetchNearPlacesAction.fulfilled, (state, action) => {
        state.nearPlaces = action.payload;
        state.nearPlacesStatus = RequestStatus.Success;
      })
      .addCase(fetchNearPlacesAction.rejected, (state) => {
        state.nearPlacesStatus = RequestStatus.Error;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        const index = state.offers.findIndex((offer) => offer.id === updatedOffer.id);
        state.offers[index].isFavorite = !state.offers[index].isFavorite;
        state.nearPlaces.forEach((offer) => {
          if (offer.id === updatedOffer.id) {
            offer.isFavorite = !offer.isFavorite;
          }
        });
        if (state.activeOffer?.id === updatedOffer.id) {
          state.activeOffer.isFavorite = !state.activeOffer.isFavorite;
        }
      });
  }
});

export const {dropOffer, dropOffersFavorite} = offersData.actions;
