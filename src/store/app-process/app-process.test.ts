import {appProcess} from './app-process';
import {CityName, SortOption} from '../../const';
import {changeActiveCity, setActiveSortType} from './app-process';

describe('AppProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };

    const expectedState = {
      activeCity: CityName.Paris,
      activeSortType: SortOption.Popular,
    };

    const result = appProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };

    const expectedState = {
      activeCity: CityName.Paris,
      activeSortType: SortOption.Popular,
    };

    const result = appProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change "activeCity" with "changeActiveCity" action', () => {
    const initialState = {
      activeCity: CityName.Cologne,
      activeSortType: SortOption.Popular,
    };

    const expectedCity = CityName.Paris;

    const result = appProcess.reducer(initialState, changeActiveCity(CityName.Paris));

    expect(result.activeCity).toBe(expectedCity);
  });

  it('should set "activeSortType" with "setActiveSortType" action', () => {
    const initialState = {
      activeCity: CityName.Cologne,
      activeSortType: SortOption.LowToHigh,
    };

    const expectedSortType = SortOption.TopRatedFirst;

    const result = appProcess.reducer(initialState, setActiveSortType(SortOption.TopRatedFirst));

    expect(result.activeSortType).toBe(expectedSortType);
  });
});
