import {NameSpace, RequestStatus} from '../../const';
import {
  getOffers,
  getNearPlaces,
  getNearPlacesStatus,
  getOfferStatus,
  getFetchingStatus,
  getActiveOffer,
} from './selectors';

describe('OffersData selectors', () => {
  const state = {
    [NameSpace.Offers]: {
      offers: [],
      nearPlaces: [],
      activeOffer: null,
      offerStatus: RequestStatus.Idle,
      fetchingStatus: RequestStatus.Idle,
      nearPlacesStatus: RequestStatus.Idle,
    }
  };

  it('should return offers', () => {
    const {offers} = state[NameSpace.Offers];
    const result = getOffers(state);
    expect(result).toBe(offers);
  });

  it('should return active offer', () => {
    const {activeOffer} = state[NameSpace.Offers];
    const result = getActiveOffer(state);
    expect(result).toBe(activeOffer);
  });

  it('should return near places', () => {
    const {nearPlaces} = state[NameSpace.Offers];
    const result = getNearPlaces(state);
    expect(result).toBe(nearPlaces);
  });

  it('should return near places status', () => {
    const {nearPlacesStatus} = state[NameSpace.Offers];
    const result = getNearPlacesStatus(state);
    expect(result).toBe(nearPlacesStatus);
  });

  it('should return offer status', () => {
    const {offerStatus} = state[NameSpace.Offers];
    const result = getOfferStatus(state);
    expect(result).toBe(offerStatus);
  });

  it('should return fetching status', () => {
    const {fetchingStatus} = state[NameSpace.Offers];
    const result = getFetchingStatus(state);
    expect(result).toBe(fetchingStatus);
  });
});
