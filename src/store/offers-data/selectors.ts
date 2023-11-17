import {createSelector} from '@reduxjs/toolkit';
import {TOffer, TCity, TOfferPreview, TState} from '../../types/index';
import {sortByOption} from '../../utils/utils';
import {getActiveCity, getActiveSortType} from '../app-process/selectors';
import {Status, MAX_NEAR_PLACES_COUNT} from '../../const';

export const getOffers = (state: TState): TOfferPreview[] => (
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

export const getStatusOffers = (state: TState): Status => (
  state.statusOffers
);

export const getFilteredOffers = createSelector(
  [getOffers, getActiveCity],
  (offers: TOfferPreview[], activeCity: string | TCity): TOfferPreview[] => (
    offers.filter((offer) => offer.city.name === activeCity)
  )
);

export const getSortedOffers = createSelector(
  [getFilteredOffers, getActiveSortType],
  (offers: TOfferPreview[], activeSortType: string): TOfferPreview[] => sortByOption(offers, activeSortType)
);

export const getSlicedNearPlaces = createSelector(
  [getNearPlaces],
  (nearPlaces: TOfferPreview[]): TOfferPreview[] => (
    nearPlaces.slice(0, MAX_NEAR_PLACES_COUNT)
  )
);
