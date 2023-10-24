import {Offer} from '../../index/index';
import OfferCard from '../ui/offer-card';

type FavoritesProps = {
  offers: Offer[];
}

function FavoritesOffers({offers}: FavoritesProps): (JSX.Element | null)[] | null {
  return (
    offers.map((item: Offer): JSX.Element|null => {
      const {images, isFavorite} = item;
      return isFavorite ?
        <article key={item.id} className="favorites__card place-card">
          <div className="favorites__image-wrapper cities__image-wrapper place-card__image-wrapper">
            <a href="#">
              {images && <img className="place-card__image" src={images[0]} width={260} height={200} alt="Place image"/>}
            </a>
          </div>
          <OfferCard offer={item}/>
        </article>
        : null;
    })
  );
}

export default FavoritesOffers;
