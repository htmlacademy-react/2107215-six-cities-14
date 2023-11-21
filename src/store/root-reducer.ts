import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {offersData} from './offers-data/offers-data';
import {favoritesData} from './favorites-data/favorites-data';
import {reviewsData} from './reviews-data/reviews-data';
import {userProcess} from './user-process/user-process';
import {appProcess} from './app-process/app-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Favorites]: favoritesData.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
  [NameSpace.App]: appProcess.reducer,
});


