import OfferCard from '../ui/offer-card';
import {TOfferPreview} from '../../types';

type TNearOfferProps = {
  offers: TOfferPreview[];
}

function NearOffers({offers}: TNearOfferProps): JSX.Element {
  const currentOffers = offers;

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
