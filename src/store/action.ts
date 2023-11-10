import {NameSpace} from '../const';
import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<{activeCity: string}>(`${NameSpace.Offers}/changeCity`);

export const setActiveSortType = createAction<{activeSortType: string}>(`${NameSpace.Offers}/setActiveSortType`);

