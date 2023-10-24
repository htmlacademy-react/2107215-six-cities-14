import {Offer} from '../../index/index';
import Offers from './offers';

type OffersProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersProps): JSX.Element|null {
  return offers?.length ?
    <div className="cities__places-list places__list tabs__content">
      <Offers offers={offers} />
    </div>
    : null;
}

export default OffersList;
