import {favoritesData} from './favorites-data';
import {RequestStatus} from '../../const';
import {favoriteOffers} from '../../utils/mocks';
import {fetchFavoritesAction} from '../api-actions';
// changeFavoriteStatusAction

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

  it('should set "favorites" to array with favorites, "fetchingStatus" to "success" with "fetchFavoritesAction".fulfilled', () => {
    const expectedState = {
      favorites: [favoriteOffers],
      fetchingStatus: RequestStatus.Success,
      statusChangeFavorite: RequestStatus.Idle,
    };

    const result = favoritesData.reducer(
      undefined,
      fetchFavoritesAction.fulfilled(
        [favoriteOffers], '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "fetchingStatus" to "loading", with "fetchFavoritesAction.pending"', () => {
    const expectedState = {
      favorites: [],
      fetchingStatus: RequestStatus.Loading,
      statusChangeFavorite: RequestStatus.Idle,
    };

    const result = favoritesData.reducer(undefined, fetchFavoritesAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "fetchingStatus" to "error", with "fetchQuestionAction.rejected', () => {
    const expectedState = {
      favorites: [],
      fetchingStatus: RequestStatus.Error,
      statusChangeFavorite: RequestStatus.Idle,
    };

    const result = favoritesData.reducer(undefined, fetchFavoritesAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
