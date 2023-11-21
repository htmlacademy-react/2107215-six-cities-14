
import {createSlice} from '@reduxjs/toolkit';
import {TOfferPreview} from '../../types/index';
import {NameSpace, RequestStatus} from '../../const';
import {fetchFavoritesAction, changeFavoriteStatusAction} from '../api-actions';

type TFavoritesData = {
  favorites: TOfferPreview[];
  fetchingStatus: RequestStatus;
  statusChangeFavorite: RequestStatus;
};

const initialState: TFavoritesData = {
  favorites: [],
  fetchingStatus: RequestStatus.Idle,
  statusChangeFavorite: RequestStatus.Idle,
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.fetchingStatus = RequestStatus.Success;
      })
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.fetchingStatus = RequestStatus.Loading;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.fetchingStatus = RequestStatus.Error;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        if (updatedOffer.isFavorite) {
          state.favorites.push(updatedOffer);
        } else {
          state.favorites = state.favorites.filter((offer) => offer.id !== updatedOffer.id);
        }
        state.statusChangeFavorite = RequestStatus.Success;
      });
  }
});
