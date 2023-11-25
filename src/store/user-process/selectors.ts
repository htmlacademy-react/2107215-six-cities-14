import {AuthorizationStatus, RequestStatus, NameSpace} from '../../const';
import {TState, TUserData} from '../../types/index';
import {createSelector} from '@reduxjs/toolkit';

export const getAuthStatus = (state: TState): AuthorizationStatus => (
  state[NameSpace.User].authorizationStatus
);

export const getStatusLogin = (state: TState): RequestStatus => (
  state[NameSpace.User].statusLogin
);

export const getUser = (state: TState): TUserData | null => (
  state[NameSpace.User].user
);

export const getAuthCheckedStatus = createSelector(
  [getAuthStatus],
  (authStatus: AuthorizationStatus): boolean => (
    authStatus === AuthorizationStatus.Auth
  )
);
