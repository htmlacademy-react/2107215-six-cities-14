import {TState, TOfferPreview} from '../../types/index';
import {NameSpace, RequestStatus} from '../../const';

export const getFavoritesOffers = (state: TState): TOfferPreview[] => state[NameSpace.Favorites].favorites;

export const getFetchingStatus = (state: TState): RequestStatus => state[NameSpace.Favorites].fetchingStatus;
