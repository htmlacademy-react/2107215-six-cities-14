import {TState, TReviews} from '../../types/index';
import {RequestStatus, NameSpace} from '../../const';

export const getReviewsOffer = (state: TState): TReviews[] => (
  state[NameSpace.Reviews].reviews
);

export const getStatusPost = (state: TState): RequestStatus => (
  state[NameSpace.Reviews].statusPost
);
