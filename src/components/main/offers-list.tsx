import {Offer} from '../../types/index';
import Offers from './offers';
import {useState} from 'react';

type OffersProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersProps): JSX.Element|null {
  const [activeOfferID, setActiveOfferID] = useState<number | null>(null);

  const handleOfferMouseOver = (id: number) => setActiveOfferID(id);
  const handleOfferMouseLeave = () => setActiveOfferID(null);

  if(!offers?.length) {
    return null;
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      <Offers offers={offers} onOfferMouseOver={handleOfferMouseOver} onOfferMouseLeave={handleOfferMouseLeave}/>
    </div>
  );
}

export default OffersList;
