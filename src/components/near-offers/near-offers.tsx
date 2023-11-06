import OfferCard from '../ui/offer-card';
import {TOffer} from '../../types';
import {useMemo} from 'react';

type TNearOfferProps = {
  offers: TOffer[];
}

function NearOffers({offers}: TNearOfferProps): JSX.Element {
  const currentOffers = useMemo(
    () => offers.slice(0, 3),
    [offers]
  );

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {currentOffers.map((item) =>
          <OfferCard key={item.id} offer={item} block={'near-places'} size={'large'}/>
        )}
      </div>
    </section>
  );
}

export default NearOffers;
