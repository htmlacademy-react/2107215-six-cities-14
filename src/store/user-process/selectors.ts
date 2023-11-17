import {AuthorizationStatus, Status} from '../../const';
import {TState} from '../../types/state';
import {createSelector} from '@reduxjs/toolkit';

export const getAuthStatus = (state: TState): AuthorizationStatus => (
  state.authorizationStatus
);

export const getStatusLogin = (state: TState): Status => (
  state.statusLogin
);

export const isAuth = createSelector(
  [getAuthStatus],
  (authStatus: AuthorizationStatus): boolean => (
    authStatus === AuthorizationStatus.Auth
  )
);
