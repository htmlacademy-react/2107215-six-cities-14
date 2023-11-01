import {createContext} from "react";
import {TCity} from "../../types";
import {city} from "../../mocks/mocks";

export type TCityContexType = {
  city: TCity;
}

export const CityContext = createContext<TCityContexType>({
  city,
});
