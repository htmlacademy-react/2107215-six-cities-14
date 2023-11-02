import {useContext} from 'react';
import {CityContext, TCityContexType} from '../context/city/city-context';

export function useCity() {
  const cityContexData = useContext<TCityContexType>(CityContext);

  if(!cityContexData) {
    throw new Error('useOffers must be used within OfferContext');
  }

  return cityContexData;
}
