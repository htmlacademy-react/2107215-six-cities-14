import {Offer} from '../../index/offer';
import {Link} from 'react-router-dom';
import ButtonBookmark from './button-bookmark';

type OfferProps = {
  offer: Offer;
}

function OfferCard({offer}: OfferProps): JSX.Element {
  const {
    id,
    isPremium,
    price,
    title,
    type } = offer;

  return (
    <>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonBookmark offer={offer} isBig={false}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}>
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${'/offer/'}${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </>
  );
}

export default OfferCard;
