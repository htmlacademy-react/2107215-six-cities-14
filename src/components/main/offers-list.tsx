import {Offer} from '../../types/index';
import Offers from './offers';

type OffersProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersProps): JSX.Element|null {
  if(!offers?.length) {
    return null;
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      <Offers offers={offers} />
    </div>
  );
}

export default OffersList;
