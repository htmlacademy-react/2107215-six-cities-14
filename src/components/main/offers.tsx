import OfferCard from '../ui/offer-card';
import {Offer} from '../../types/index';

type OffersProps = {
  offers: Offer[];
}

function Offers({offers}: OffersProps): (JSX.Element | null)[] | null {
  return (
    offers.map((item: Offer): JSX.Element => {
      const {images} = item;
      return (
        <article key={item.id} className="cities__card place-card">
          <div className="cities__image-wrapper place-card__image-wrapper">
            <a href="#">
              {images && <img className="place-card__image" src={images[0]} width={260} height={200} alt="Place image"/>}
            </a>
          </div>
          <OfferCard offer={item}/>
        </article>
      );
    })
  );
}

export default Offers;
