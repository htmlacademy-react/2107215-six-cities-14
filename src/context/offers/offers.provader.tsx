import {useState} from 'react';
import { TOffer } from '../../types';
import {offers as mockOffers} from '../../mocks/mocks';
import {OfferContext} from './offers.context'

type OfferProviderProps = {
  children: React.ReactNode;
}

export function OffersProvider({children}: OfferProviderProps) {
  const [offers, setOffers] = useState<TOffer[]>(mockOffers);
  return (
    <OfferContext.Provider value={{offers, setOffers}}>
      {children}
    </OfferContext.Provider>
  );
}
