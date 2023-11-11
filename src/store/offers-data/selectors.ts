import {createSelector} from '@reduxjs/toolkit';
import {TState} from '../../types/state';
import {TOffer, TCity, TOfferPreview} from '../../types/index';
import {sortByOption} from '../../utils/utils';
import {getActiveCity, getActiveSortType} from '../app-process/selectors';

export const getOffers = (state: TState): TOffer[] => (
  state.offers
);

// export const getNearPlaces = (state: TState): TOfferPreview[] => (
//   state.nearPlaces
// )

// export const getActiveOffer = (state: TState): TOffer | null => (
//   state.activeOffer
// )

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

// export const getOfferById = (offerId: string) => createSelector(
//   getOffers,
//   (offers: TOffer[]): TOffer | null => offers.find((offer) => offer.id === offerId) ?? null
// );

// export const getNearPlacesToRender =(offerId: string, number: number) => createSelector(
//   getOffers,
//   (offers: TOfferPreview[]): TOfferPreview[] => offers.filter((offer) => offer.id !== offerId).slice(0, number)
// );
