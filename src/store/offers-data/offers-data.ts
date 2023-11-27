import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, RequestStatus} from '../../const';
import {TOfferPreview, TOffer} from '../../types/index';
import {
  fetchOffersAction,
  fetchActiveOfferAction,
  fetchNearPlacesAction,
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
      });
  }
});

export const {dropOffer} = offersData.actions;
