import OfferCard from "../ui/offer-card";
import {TOffer} from "../../types";

type TNearOfferProps = {
  offers: TOffer[];
}

function NearOffers({offers}: TNearOfferProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.slice(0, 3).map((item) =>
            <OfferCard offer={item} block={'near-places'} size={'large'}/>
          )}
        </div>
    </section>
  )
}

export default NearOffers;
