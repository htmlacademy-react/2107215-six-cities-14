import {createContext} from "react";
import {TOffer} from "../../types";

export type OffersContexType = {
  offers: TOffer[];
  setOffers: (offers: TOffer[]) => void;
}

export const OfferContext = createContext<OffersContexType>({
  offers: [],
  setOffers: () => {},
});
