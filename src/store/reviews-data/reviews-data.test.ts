import {reviewsData} from './reviews-data';
import {RequestStatus} from '../../const';
import {fetchReviewsAction, postReviewAction} from '../api-actions';
import {review, fakeReview, fakeId} from '../../utils/mocks-data';

describe('ReviewsData Slice', () => {
  it('should return initial state with empty action', () => {
    const expectedState = {
      reviews: [],
      statusPost: RequestStatus.Idle,
      reviewsStatus: RequestStatus.Idle,
    };

    const emptyAction = { type: '' };

    const result = reviewsData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const expectedState = {
      reviews: [],
      statusPost: RequestStatus.Idle,
      reviewsStatus: RequestStatus.Idle,
    };

    const emptyAction = { type: '' };

    const result = reviewsData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "reviews" to array with "reviews", "reviewsStatus" to "Success" with "fetchReviewsAction.fulfilled', () => {
    const expectedState = {
      reviews: [review],
      statusPost: RequestStatus.Idle,
      reviewsStatus: RequestStatus.Success,
    };

    const result = reviewsData.reducer(
      undefined,
      fetchReviewsAction.fulfilled(
        [review], '', fakeId)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "reviewsStatus" to "Error", with "fetchReviewsAction.rejected', () => {
    const expectedState = {
      reviews: [],
      statusPost: RequestStatus.Idle,
      reviewsStatus: RequestStatus.Error,
    };

    const result = reviewsData.reducer(undefined, fetchReviewsAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should update "reviews" to array with "reviews", "statusPost" to "Success" with "postReviewAction.fulfilled', () => {
    const expectedState = {
      reviews: [review],
      statusPost: RequestStatus.Success,
      reviewsStatus: RequestStatus.Idle,
    };

    const result = reviewsData.reducer(
      undefined,
      postReviewAction.fulfilled(
        review, '', fakeReview)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "statusPost" to "Loading" with "postReviewAction.pending"', () => {
    const expectedState = {
      reviews: [],
      statusPost: RequestStatus.Loading,
      reviewsStatus: RequestStatus.Idle,
    };

    const result = reviewsData.reducer(undefined, postReviewAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "statusPost" to "Error", with "postReviewAction.rejected', () => {
    const expectedState = {
      reviews: [],
      statusPost: RequestStatus.Error,
      reviewsStatus: RequestStatus.Idle,
    };

    const result = reviewsData.reducer(undefined, postReviewAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
