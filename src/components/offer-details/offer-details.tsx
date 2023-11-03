import {TOffer} from '../../types/index';
import ReviewsList from '../reviews-list/reviews-list';
import ButtonBookmark from '../ui/button-bookmark';
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
  const {description, host, type, bedrooms, maxAdults, price, rating, isPremium, title} = offer;
  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {isPremium &&
          <div className="offer__mark">
            <span>Premium</span>
          </div>}
        <div className="offer__name-wrapper">
          <h1 className="offer__name">
            {title}
          </h1>
          <ButtonBookmark offer={offer} islarge />
        </div>
        <div className="offer__rating rating">
          <div className="offer__stars rating__stars">
            <span style={{ width: `${getRatingWidth(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="offer__rating-value rating__value">{rating}</span>
        </div>
        <ul className="offer__features">
          <li className="offer__feature offer__feature--entire">
            {type}
          </li>
          <li className="offer__feature offer__feature--bedrooms">
            {bedrooms} Bedrooms
          </li>
          <li className="offer__feature offer__feature--adults">
            Max {maxAdults} adults
          </li>
        </ul>
        <div className="offer__price">
          <b className="offer__price-value">&euro;{price}</b>
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
              <img className="offer__avatar user__avatar"
                src={host.avatarUrl}
                width={74}
                height={74}
                alt={host.name}
              />
            </div>
            <span className="offer__user-name">
              {host.name}
            </span>
            <span className="offer__user-status">
              {host.isPro}
            </span>
          </div>
          <div className="offer__description">
            <p className="offer__text">
              {description}
            </p>
            {/* <p className="offer__text">
              An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
            </p> */}
          </div>
        </div>
        <ReviewsList />
      </div>
    </div>
  );
}

export default OfferDetails;
