import OfferCard from '../ui/offer-card';
import {TOfferPreview} from '../../types';
import {memo} from 'react';

type TNearOfferProps = {
  nearPlacesToRender: TOfferPreview[];
}

const NearOffers = memo(({nearPlacesToRender}: TNearOfferProps): JSX.Element | null => (
  <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">
      {nearPlacesToRender.map((item) =>
        <OfferCard key={item.id} offer={item} block={'near-places'} size={'large'}/>
      )}
    </div>
  </section>
));

NearOffers.displayName = 'NearOffers';

export default NearOffers;
