import {AuthorizationStatus} from '../../const';
import {TState} from '../../types/state';
// import {TUser} from '../../types/user';

export const getAuthStatus = (state: TState): AuthorizationStatus => (
  state.authorizationStatus
);
// export const getUser = (state: TState): TUser | null => (
//   state.user
// );
// export const getStatusLogin = (state: TState): string => (
//   state.statusLogin
// );
