import {createSelector} from '@reduxjs/toolkit';
import {State} from '../../types/state';
import {TOffer, TCity} from '../../types/index';
import {sortByOption} from '../../utils/utils';
import {getActiveCity, getActiveSortType} from '../app-process/selectors';

export const getOffers = (state: State) => (
  state.offers
);

export const getFilteredOffers = createSelector(
  [getOffers, getActiveCity],
  (offers: TOffer[], activeCity: string | TCity): TOffer[] => (
    offers.filter((offer) => offer.city.name === activeCity)
  )
);

export const getSortedOffers = createSelector(
  [getFilteredOffers, getActiveSortType],
  (offers: TOffer[], activeSortType: string): TOffer[] => sortByOption(offers, activeSortType)
);
