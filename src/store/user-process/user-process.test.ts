import {userProcess} from './user-process';
import {RequestStatus, AuthorizationStatus} from '../../const';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';
import {fakeUserData, fakeLoginData} from '../../utils/mocks-data';

describe('UserProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      statusLogin: RequestStatus.Idle,
      user: null,
    };

    const emptyAction = { type: '' };

    const result = userProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      statusLogin: RequestStatus.Idle,
      user: null,
    };

    const emptyAction = { type: '' };

    const result = userProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "user" to "user parameters", "authorizationStatus" to "Auth" with "checkAuthAction.fulfilled', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      statusLogin: RequestStatus.Idle,
      user: null,
    };

    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      statusLogin: RequestStatus.Idle,
      user: fakeUserData,
    };

    const result = userProcess.reducer(initialState, checkAuthAction.fulfilled(
      fakeUserData, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "user" to "null", "authorizationStatus" to "NoAuth", with "checkAuthAction.rejected', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      statusLogin: RequestStatus.Idle,
      user: null,
    };

    const result = userProcess.reducer(undefined, checkAuthAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "statusLogin" to "Loading" with "loginAction.pending', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      statusLogin: RequestStatus.Loading,
      user: null,
    };

    const result = userProcess.reducer(undefined, loginAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "user" to "user parameters", "authorizationStatus" to "Auth", "statusLogin" to "Success" with "loginAction.fulfilled', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      statusLogin: RequestStatus.Idle,
      user: null,
    };

    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      statusLogin: RequestStatus.Success,
      user: fakeUserData,
    };

    const result = userProcess.reducer(initialState, loginAction.fulfilled(
      fakeUserData, '', fakeLoginData
    ));

    expect(result).toEqual(expectedState);
  });

  it('should set "user" to "null", "authorizationStatus" to "NoAuth" with "logoutAction.pending', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      statusLogin: RequestStatus.Idle,
      user: null,
    };

    const result = userProcess.reducer(undefined, logoutAction.pending);

    expect(result).toEqual(expectedState);
  });
});
