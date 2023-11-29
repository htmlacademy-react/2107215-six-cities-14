import {TUserData,} from '../../types/index';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, RequestStatus, AuthorizationStatus} from '../../const';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';

type TUserProcess = {
  authorizationStatus: AuthorizationStatus;
  statusLogin: RequestStatus;
  user: TUserData | null;
};

const initialState: TUserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  statusLogin: RequestStatus.Idle,
  user: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.rejected, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.pending, (state) => {
        state.user = null;
      })
      .addCase(loginAction.rejected, (state) => {
        state.statusLogin = RequestStatus.Error;
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.pending, (state) => {
        state.statusLogin = RequestStatus.Loading;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.statusLogin = RequestStatus.Success;
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(logoutAction.pending, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
