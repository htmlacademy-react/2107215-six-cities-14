import OfferCard from '../ui/offer-card';
import {Offer} from '../../types/index';

type OffersProps = {
  offers: Offer[];
  onOfferMouseOver: (id: number) => void;
  onOfferMouseLeave: () => void;
}

function Offers({offers, onOfferMouseOver, onOfferMouseLeave} : OffersProps) {

  return (
    offers.map((item: Offer): JSX.Element => {
      const {images, id} = item;
      return (
        <article key={item.id}
          className="cities__card place-card"
          onMouseLeave={onOfferMouseLeave}
          onMouseOver={() => onOfferMouseOver(id)}
        >
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
