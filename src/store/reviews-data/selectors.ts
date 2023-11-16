import {TState, TReviews} from '../../types/index';
import {Status} from '../../const';

export const getReviewsOffer = (state: TState): TReviews[] => (
  state.reviews
);

export const getStatusPost = (state: TState): Status => (
  state.statusPost
);
