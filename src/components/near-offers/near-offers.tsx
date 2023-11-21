import OfferCard from '../ui/offer-card';
import {TOfferPreview} from '../../types';

type TNearOfferProps = {
  nearPlacesToRender: TOfferPreview[];
}

function NearOffers({nearPlacesToRender}: TNearOfferProps): JSX.Element | null {

  if(!nearPlacesToRender.length) {
    return null;
  }

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearPlacesToRender.map((item) =>
          <OfferCard key={item.id} offer={item} block={'near-places'} size={'large'}/>
        )}
      </div>
    </section>
  );
}

export default NearOffers;
