import {TState, TOfferPreview} from '../../types/index';

export const getFavoritesOffers = (state: TState): TOfferPreview[] => state.favorites;
