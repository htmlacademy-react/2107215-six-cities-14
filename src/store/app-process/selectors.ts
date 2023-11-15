import {TState} from '../../types/index';

export const getActiveCity = (state: TState): string => state.activeCity;

export const getActiveSortType = (state: TState): string => state.activeSortType;

export const getDataLoading = (state: TState): boolean => (
  state.isDataLoading
);
