import {useContext} from 'react';
import {OfferContext, OffersContexType} from './offers.context';

export function useOffers() {
  const OffersContexData = useContext<OffersContexType>(OfferContext);

  if(!OffersContexData) {
    throw new Error('useOffers must be used within OfferContext')
  }

  return OffersContexData;
}
