import {State} from '../../types/index';

export const getActiveCity = (state: State): string => state.activeCity;
export const getActiveSortType = (state: State): string => state.activeSortType;
