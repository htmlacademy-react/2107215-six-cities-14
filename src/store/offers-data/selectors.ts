import {createSelector} from '@reduxjs/toolkit';
import {TOffer, TCity, TOfferPreview, TState} from '../../types/index';
import {sortByOption} from '../../utils/utils';
import {getActiveCity, getActiveSortType} from '../app-process/selectors';
import {Status, MAX_NEAR_PLACES_COUNT} from '../../const';

export const getOffers = (state: TState): TOffer[] => (
  state.offers
);

export const getNearPlaces = (state: TState): TOfferPreview[] => (
  state.nearPlaces
);

export const getActiveOffer = (state: TState): TOffer | null => (
  state.activeOffer
);

export const getStatusOffer = (state: TState): Status => (
  state.statusOffer
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

export const getSlicedNearPlaces = createSelector(
  [getNearPlaces],
  (nearPlaces: TOfferPreview[]): TOfferPreview[] => (
    nearPlaces.slice(0, MAX_NEAR_PLACES_COUNT)
  )
);
