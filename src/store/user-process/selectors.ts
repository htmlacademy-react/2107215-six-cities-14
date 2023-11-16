import {AuthorizationStatus} from '../../const';
import {TState} from '../../types/state';
// import {TUser} from '../../types/user';

export const getAuthStatus = (state: TState): AuthorizationStatus => (
  state.authorizationStatus
);

export const isAuth = (state: TState): boolean => (
  state.authorizationStatus === AuthorizationStatus.Auth
);
// export const getStatusLogin = (state: TState): string => (
//   state.statusLogin
// );
