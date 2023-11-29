import {favoritesData} from './favorites-data';
import {RequestStatus} from '../../const';
import {favoriteOffer, noFavoriteOffer, fakeFavoriteStatusOne, fakeFavoriteStatusZero} from '../../utils/mocks-data';
import {fetchFavoritesAction, changeFavoriteStatusAction} from '../api-actions';

describe('FavoritesData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };

    const expectedState = {
      favorites: [],
      fetchingStatus: RequestStatus.Idle,
      statusChangeFavorite: RequestStatus.Idle,
    };

    const result = favoritesData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };

    const expectedState = {
      favorites: [],
      fetchingStatus: RequestStatus.Idle,
      statusChangeFavorite: RequestStatus.Idle,
    };

    const result = favoritesData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "favorites" to array with "favorites", "fetchingStatus" to "Success" with "fetchFavoritesAction".fulfilled', () => {
    const expectedState = {
      favorites: [favoriteOffer],
      fetchingStatus: RequestStatus.Success,
      statusChangeFavorite: RequestStatus.Idle,
    };

    const result = favoritesData.reducer(
      undefined,
      fetchFavoritesAction.fulfilled(
        [favoriteOffer], '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "fetchingStatus" to "Loading" with "fetchFavoritesAction.pending"', () => {
    const expectedState = {
      favorites: [],
      fetchingStatus: RequestStatus.Loading,
      statusChangeFavorite: RequestStatus.Idle,
    };

    const result = favoritesData.reducer(undefined, fetchFavoritesAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "fetchingStatus" to "Error", with "fetchQuestionAction.rejected', () => {
    const expectedState = {
      favorites: [],
      fetchingStatus: RequestStatus.Error,
      statusChangeFavorite: RequestStatus.Idle,
    };

    const result = favoritesData.reducer(undefined, fetchFavoritesAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should update "favorite" to array with "favorites" if the status = 1, "statusChangeFavorite" to "Success" with "changeFavoriteStatusAction.fulfilled', () => {
    const expectedState = {
      favorites: [favoriteOffer],
      fetchingStatus: RequestStatus.Idle,
      statusChangeFavorite: RequestStatus.Success,
    };

    const result = favoritesData.reducer(
      undefined,
      changeFavoriteStatusAction.fulfilled(
        favoriteOffer, '', fakeFavoriteStatusOne)
    );

    expect(result).toEqual(expectedState);
  });

  it('should delete "favorite" to array with "favorites" if the status = 0, "statusChangeFavorite" to "Success" with "changeFavoriteStatusAction.fulfilled', () => {
    const initialState = {
      favorites: [favoriteOffer],
      fetchingStatus: RequestStatus.Idle,
      statusChangeFavorite: RequestStatus.Idle,
    };

    const expectedState = {
      favorites: [],
      fetchingStatus: RequestStatus.Idle,
      statusChangeFavorite: RequestStatus.Success,
    };

    const result = favoritesData.reducer(
      initialState,
      changeFavoriteStatusAction.fulfilled(
        noFavoriteOffer, '', fakeFavoriteStatusZero)
    );

    expect(result).toEqual(expectedState);
  });
});
