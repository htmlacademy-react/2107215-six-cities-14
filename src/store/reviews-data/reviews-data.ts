import {createSlice} from '@reduxjs/toolkit';
import {TReviews} from '../../types/index';
import {NameSpace, RequestStatus} from '../../const';
import {fetchReviewsAction, postReviewAction,} from '../api-actions';

type TReviewsData = {
  reviews: TReviews[];
  statusPost: RequestStatus;
};

const initialState: TReviewsData = {
  reviews: [],
  statusPost: RequestStatus.Idle,
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.statusPost = RequestStatus.Success;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.statusPost = RequestStatus.Loading;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.statusPost = RequestStatus.Error;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.statusPost = RequestStatus.Success;
      });
  }
});
