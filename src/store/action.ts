import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<{activeCity: string}>('offer/changeCity');

export const setActiveSortType = createAction<{activeSortType: string}>('offer/setActiveSortType');

