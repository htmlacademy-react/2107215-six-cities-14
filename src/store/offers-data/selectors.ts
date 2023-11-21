import {createSelector} from '@reduxjs/toolkit';
import {TOffer, TCity, TOfferPreview, TState} from '../../types/index';
import {getActiveCity} from '../app-process/selectors';
import {RequestStatus, MAX_NEAR_PLACES_COUNT, NameSpace} from '../../const';

export const getOffers = (state: TState): TOfferPreview[] => (
  state[NameSpace.Offers].offers
);

export const getNearPlaces = (state: TState): TOfferPreview[] => (
  state[NameSpace.Offers].nearPlaces
);

export const getActiveOffer = (state: TState): TOffer | null => (
  state[NameSpace.Offers].activeOffer
);

export const getOfferStatus = (state: TState): RequestStatus => (
  state[NameSpace.Offers].offerStatus
);

export const getFetchingStatus = (state: TState): RequestStatus => (
  state[NameSpace.Offers].fetchingStatus
);

export const getFilteredOffers = createSelector(
  [getOffers, getActiveCity],
  (offers: TOfferPreview[], activeCity: string | TCity): TOfferPreview[] => (
    offers.filter((offer) => offer.city.name === activeCity)
  )
);

export const getSlicedNearPlaces = createSelector(
  [getNearPlaces],
  (nearPlaces: TOfferPreview[]): TOfferPreview[] => (
    nearPlaces.slice(0, MAX_NEAR_PLACES_COUNT)
  )
);
