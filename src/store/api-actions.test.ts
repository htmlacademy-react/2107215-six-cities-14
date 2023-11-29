import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {Action} from 'redux';
import {APIRoute} from '../const';
import {fakeUserData, fakeReview} from '../utils/mocks-data';
import {TState} from '../types/index';
import {redirectToRoute} from './action';
import * as tokenStorage from '../services/token';
import {
  TAppThunkDispatch,
  extractActionsTypes,
  favoriteOffer,
  offer,
  review,
  fakeId,
  fakeFavoriteStatusOne,
  fakeLoginData
} from '../utils/mocks-data';
import {
  checkAuthAction,
  fetchOffersAction,
  fetchActiveOfferAction,
  fetchNearPlacesAction,
  fetchReviewsAction,
  postReviewAction,
  fetchFavoritesAction,
  changeFavoriteStatusAction,
  loginAction,
  logoutAction
} from './api-actions';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<TState, Action<string>, TAppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ OFFERS: { offers: [] }});
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200, fakeUserData);

      await store.dispatch(checkAuthAction());
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const checkAuthActionFulfilled = emittedActions.at(1) as ReturnType<typeof checkAuthAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);

      expect(checkAuthActionFulfilled.payload)
        .toEqual(fakeUserData);
    });
  });

  describe('fetchOffersAction', () => {
    it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.fulfilled", when server response 200', async() => {
      const mockOffers = [offer];
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOffers);

      await store.dispatch(fetchOffersAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.fulfilled.type,
      ]);

      expect(fetchOffersActionFulfilled.payload)
        .toEqual(mockOffers);
    });
  });

  describe('fetchActiveOfferAction', () => {
    it('should dispatch "fetchActiveOfferAction.pending", "fetchActiveOfferAction.fulfilled", when server response 200', async() => {
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${fakeId}`).reply(200, offer);

      await store.dispatch(fetchActiveOfferAction(fakeId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchActiveOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchActiveOfferAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchActiveOfferAction.pending.type,
        fetchActiveOfferAction.fulfilled.type,
      ]);

      expect(fetchActiveOfferActionFulfilled.payload)
        .toEqual(offer);
    });
  });

  describe('fetchNearPlacesAction', () => {
    it('should dispatch "fetchNearPlacesAction.pending", "fetchNearPlacesAction.fulfilled", when server response 200', async() => {
      const mockOffers = [offer];
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${fakeId}${APIRoute.NearPlaces}`).reply(200, mockOffers);

      await store.dispatch(fetchNearPlacesAction(fakeId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchNearPlacesActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchNearPlacesAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchNearPlacesAction.pending.type,
        fetchNearPlacesAction.fulfilled.type,
      ]);

      expect(fetchNearPlacesActionFulfilled.payload)
        .toEqual(mockOffers);
    });
  });

  describe('fetchReviewsAction', () => {
    it('should dispatch "fetchReviewsAction.pending", "fetchReviewsAction.fulfilled", when server response 200', async() => {
      const mockOffers = [offer];
      mockAxiosAdapter.onGet(`${APIRoute.Reviews}/${fakeId}`).reply(200, mockOffers);

      await store.dispatch(fetchReviewsAction(fakeId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchReviewsActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchReviewsAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.fulfilled.type,
      ]);

      expect(fetchReviewsActionFulfilled.payload)
        .toEqual(mockOffers);
    });
  });

  describe('postReviewAction', () => {
    it('should dispatch "postReviewAction.pending", "postReviewAction.fulfilled", when server response 200', async() => {
      mockAxiosAdapter.onPost(`${APIRoute.Reviews}/${fakeId}`).reply(200, review);

      await store.dispatch(postReviewAction(fakeReview));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const postReviewActionFulfilled = emittedActions.at(1) as ReturnType<typeof postReviewAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        postReviewAction.pending.type,
        postReviewAction.fulfilled.type,
      ]);

      expect(postReviewActionFulfilled.payload)
        .toEqual(review);
    });
  });

  describe('fetchFavoritesAction', () => {
    it('should dispatch "fetchFavoritesAction.pending", "fetchFavoritesAction.fulfilled", when server response 200', async() => {
      const mockFavoriteOffers = [favoriteOffer];
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, mockFavoriteOffers);

      await store.dispatch(fetchFavoritesAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFavoritesActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavoritesAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavoritesAction.pending.type,
        fetchFavoritesAction.fulfilled.type,
      ]);

      expect(fetchFavoritesActionFulfilled.payload)
        .toEqual(mockFavoriteOffers);
    });
  });

  describe('changeFavoriteStatusAction', () => {
    it('should dispatch "changeFavoriteStatusAction.pending", "changeFavoriteStatusAction.fulfilled", when server response 200', async() => {
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${fakeId}/${fakeFavoriteStatusOne.status}`).reply(200, favoriteOffer);

      await store.dispatch(changeFavoriteStatusAction(fakeFavoriteStatusOne));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const changeFavoriteStatusActionFulfilled = emittedActions.at(1) as ReturnType<typeof changeFavoriteStatusAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        changeFavoriteStatusAction.pending.type,
        changeFavoriteStatusAction.fulfilled.type,
      ]);

      expect(changeFavoriteStatusActionFulfilled.payload)
        .toEqual(favoriteOffer);
    });
  });

  describe('loginAction', () => {
    it('should dispatch "loginAction.pending", "loginAction.fulfilled", "redirectToRoute", "fetchFavoritesAction", "fetchOffersAction" when server response 200', async() => {
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeUserData);

      await store.dispatch(loginAction(fakeLoginData));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const loginActionFulfilled = emittedActions.at(4) as ReturnType<typeof loginAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        loginAction.pending.type,
        redirectToRoute.type,
        fetchFavoritesAction.pending.type,
        fetchOffersAction.pending.type,
        loginAction.fulfilled.type,
      ]);

      expect(loginActionFulfilled.payload)
        .toEqual(fakeUserData);
    });

    it('should call "saveToken" once with the received token', async () => {
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(fakeLoginData));

      expect(mockSaveToken).toHaveBeenCalledTimes(1);
      expect(mockSaveToken).toHaveBeenCalledWith(fakeServerReplay.token);
    });
  });

  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 204', async() => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        fetchOffersAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('should one call "dropToken" with "logoutAction"', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logoutAction());

      expect(mockDropToken).toHaveBeenCalledTimes(1);
    });
  });
});
