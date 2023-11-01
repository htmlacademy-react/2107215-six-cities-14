import {TOffer} from '../../types/index';
import ReviewsList from '../../components/offer/reviews-list';
import ButtonBookmark from '../../components/ui/button-bookmark';
import {getRatingWidth} from '../../utils/utils';

const offerInside = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'KitchenBaby seat',
  'Dishwasher',
  'Cabel TV',
  'Fridge',
];

type TOfferDetailsProps = {
  offer: TOffer;
}

function OfferDetails({offer}: TOfferDetailsProps) {
  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {offer.isPremium &&
          <div className="offer__mark">
            <span>Premium</span>
          </div>}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {offer.title}
            </h1>
            <ButtonBookmark offer={offer} islarge />
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{ width: `${getRatingWidth(offer.rating)}%` }} />
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{offer.rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {offer.type}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {offer.bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {offer.maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{offer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {offerInside.map((item) => (
                <li key={item} className="offer__inside-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width={74} height={74} alt="Host avatar" />
              </div>
              <span className="offer__user-name">
                Angelina
              </span>
              <span className="offer__user-status">
                Pro
              </span>
            </div>
            <div className="offer__description">
            <p className="offer__text">
              A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
            </p>
            <p className="offer__text">
              An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
            </p>
          </div>
        </div>
        <ReviewsList />
      </div>
    </div>
  )
}

export default OfferDetails;
