import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setActiveSortType} from './action';
import {offers} from '../mocks/mocks';
import {CityName, SortOption} from '../const';
import {TOffer} from '../types';

type Data = {
  activeCity: string;
  offers: TOffer[];
  activeSortType: string;
};

const initialState: Data = {
  activeCity: CityName.Paris,
  offers,
  activeSortType: SortOption.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload.activeCity;
    })
    .addCase(setActiveSortType, (state, action) => {
      state.activeSortType = action.payload.activeSortType;
    });
});

export {reducer};
