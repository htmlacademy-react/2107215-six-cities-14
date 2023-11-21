import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CityName, NameSpace, SortOption} from '../../const';

type TAppProcess = {
  activeCity: CityName;
  activeSortType: string;
};

const initialState: TAppProcess = {
  activeCity: CityName.Paris,
  activeSortType: SortOption.Popular,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeActiveCity: (state, action: PayloadAction<CityName>) => {
      state.activeCity = action.payload;
    },
    setActiveSortType: (state, action: PayloadAction<string>) => {
      state.activeSortType = action.payload;
    }
  },
});

export const {changeActiveCity, setActiveSortType} = appProcess.actions;

