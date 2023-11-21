import {TState} from '../../types/index';
import {CityName, NameSpace} from '../../const';

export const getActiveCity = (state: TState): CityName => state[NameSpace.App].activeCity;

export const getActiveSortType = (state: TState): string => state[NameSpace.App].activeSortType;
