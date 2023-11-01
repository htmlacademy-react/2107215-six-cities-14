import {city} from '../../mocks/mocks';
import {CityContext} from './city-context';

type TOfferProviderProps = {
  children: React.ReactNode;
}

export function CityProvider({children}: TOfferProviderProps) {
  return (
    <CityContext.Provider value={{city: city}}>
      {children}
    </CityContext.Provider>
  );
}
