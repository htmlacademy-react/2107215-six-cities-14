import {TOffer} from '../../types/index';
import ButtonBookmark from '../ui/button-bookmark';
import {getRatingWidth} from '../../utils/utils';
import {PropsWithChildren} from 'react';
import {addPluralEnding} from '../../utils/common';

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

type TOfferDetailsProps = PropsWithChildren<{
  offer: TOffer;
}>

function OfferDetails({children, offer}: TOfferDetailsProps) {
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
            {`${bedrooms} Bedroom${addPluralEnding(bedrooms)}`}
          </li>
          <li className="offer__feature offer__feature--adults">
            {`Max ${maxAdults} adult${addPluralEnding(maxAdults)}`}
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
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default OfferDetails;
