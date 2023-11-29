import {offersData} from './offers-data';
import {RequestStatus} from '../../const';
import {offer, fakeId} from '../../utils/mocks-data';
import {fetchOffersAction, fetchActiveOfferAction, fetchNearPlacesAction} from '../../store/api-actions';

describe('OffersData Slice', () => {
  it('should return initial state with empty action', () => {
    const expectedState = {
      offers: [],
      nearPlaces: [],
      activeOffer: null,
      offerStatus: RequestStatus.Idle,
      fetchingStatus: RequestStatus.Idle,
      nearPlacesStatus: RequestStatus.Idle,
    };

    const emptyAction = { type: '' };

    const result = offersData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const expectedState = {
      offers: [],
      nearPlaces: [],
      activeOffer: null,
      offerStatus: RequestStatus.Idle,
      fetchingStatus: RequestStatus.Idle,
      nearPlacesStatus: RequestStatus.Idle,
    };

    const emptyAction = { type: '' };

    const result = offersData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" to array with "offers", "fetchingStatus" to "Success" with "fetchOffersAction.fulfilled', () => {
    const expectedState = {
      offers: [offer],
      nearPlaces: [],
      activeOffer: null,
      offerStatus: RequestStatus.Idle,
      fetchingStatus: RequestStatus.Success,
      nearPlacesStatus: RequestStatus.Idle,
    };

    const result = offersData.reducer(
      undefined,
      fetchOffersAction.fulfilled(
        [offer], '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "fetchingStatus" to "Loading" with "fetchOffersAction.pending"', () => {
    const expectedState = {
      offers: [],
      nearPlaces: [],
      activeOffer: null,
      offerStatus: RequestStatus.Idle,
      fetchingStatus: RequestStatus.Loading,
      nearPlacesStatus: RequestStatus.Idle,
    };

    const result = offersData.reducer(undefined, fetchOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "fetchingStatus" to "Error", with "fetchOffersAction.rejected', () => {
    const expectedState = {
      offers: [],
      nearPlaces: [],
      activeOffer: null,
      offerStatus: RequestStatus.Idle,
      fetchingStatus: RequestStatus.Error,
      nearPlacesStatus: RequestStatus.Idle,
    };

    const result = offersData.reducer(undefined, fetchOffersAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "offerStatus" to "Success", "activeOffer" to "offer" with "fetchActiveOfferAction.fulfilled', () => {
    const expectedState = {
      offers: [],
      nearPlaces: [],
      activeOffer: offer,
      offerStatus: RequestStatus.Success,
      fetchingStatus: RequestStatus.Idle,
      nearPlacesStatus: RequestStatus.Idle,
    };

    const result = offersData.reducer(
      undefined,
      fetchActiveOfferAction.fulfilled(
        offer, '', fakeId)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "offerStatus" to "Loading" with "fetchActiveOfferAction.pending"', () => {
    const expectedState = {
      offers: [],
      nearPlaces: [],
      activeOffer: null,
      offerStatus: RequestStatus.Loading,
      fetchingStatus: RequestStatus.Idle,
      nearPlacesStatus: RequestStatus.Idle,
    };

    const result = offersData.reducer(undefined, fetchActiveOfferAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offerStatus" to "Error", with "fetchActiveOfferAction.rejected', () => {
    const expectedState = {
      offers: [],
      nearPlaces: [],
      activeOffer: null,
      offerStatus: RequestStatus.Error,
      fetchingStatus: RequestStatus.Idle,
      nearPlacesStatus: RequestStatus.Idle,
    };

    const result = offersData.reducer(undefined, fetchActiveOfferAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "nearPlaces" to array with "nearPlaces", "nearPlacesStatus" to "Success" with "fetchNearPlacesAction.fulfilled', () => {
    const expectedState = {
      offers: [],
      nearPlaces: [offer],
      activeOffer: null,
      offerStatus: RequestStatus.Idle,
      fetchingStatus: RequestStatus.Idle,
      nearPlacesStatus: RequestStatus.Success,
    };

    const result = offersData.reducer(
      undefined,
      fetchNearPlacesAction.fulfilled(
        [offer], '', fakeId)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "nearPlacesStatus" to "Error" with "fetchNearPlacesAction.rejected', () => {
    const expectedState = {
      offers: [],
      nearPlaces: [],
      activeOffer: null,
      offerStatus: RequestStatus.Idle,
      fetchingStatus: RequestStatus.Idle,
      nearPlacesStatus: RequestStatus.Error,
    };

    const result = offersData.reducer(undefined, fetchNearPlacesAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
