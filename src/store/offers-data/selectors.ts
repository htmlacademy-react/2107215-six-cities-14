import {createSelector} from '@reduxjs/toolkit';
import {TCity, TOfferPreview, TState} from '../../types/index';
import {getActiveCity} from '../app-process/selectors';
import {RequestStatus, MAX_NEAR_PLACES_COUNT, NameSpace} from '../../const';

export const getOffers = (state: Pick<TState, NameSpace.Offers>): TOfferPreview[] => (
  state[NameSpace.Offers].offers
);

export const getNearPlaces = (state: Pick<TState, NameSpace.Offers>): TOfferPreview[] => (
  state[NameSpace.Offers].nearPlaces
);

export const getNearPlacesStatus = (state: Pick<TState, NameSpace.Offers>): RequestStatus => (
  state[NameSpace.Offers].nearPlacesStatus
);

export const getOfferStatus = (state: Pick<TState, NameSpace.Offers>): RequestStatus => (
  state[NameSpace.Offers].offerStatus
);

export const getFetchingStatus = (state: Pick<TState, NameSpace.Offers>): RequestStatus => (
  state[NameSpace.Offers].fetchingStatus
);

export const getFilteredOffers = createSelector(
  [getOffers, getActiveCity],
  (offers: TOfferPreview[], activeCity: string | TCity): TOfferPreview[] => (
    offers.filter((offer) => offer.city.name === activeCity)
  )
);

export const getEmptyOffers = createSelector(
  [getFilteredOffers],
  (offers: TOfferPreview[]): boolean => (
    !offers.length
  ));

export const getActiveOffer = createSelector(
  (state: Pick<TState, NameSpace.Offers>) => state[NameSpace.Offers],
  (state) => state.activeOffer
);

export const getSlicedNearPlaces = createSelector(
  [getNearPlaces],
  (nearPlaces: TOfferPreview[]): TOfferPreview[] => (
    nearPlaces.slice(0, MAX_NEAR_PLACES_COUNT)
  )
);
