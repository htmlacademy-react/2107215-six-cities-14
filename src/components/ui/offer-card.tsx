import {TOfferPreview} from '../../types/offer';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import ButtonBookmark from './button-bookmark';
import {capitalize} from '../../utils/common';
import {getRatingWidth} from '../../utils/utils';

type TCardImageSize = 'small' | 'large';

type TOffersProps = {
  offer: TOfferPreview;
  size: TCardImageSize;
  block: string;
  onCardHover?: (offerId: TOfferPreview['id'] | null) => void;
}

const sizeMap: Record<TCardImageSize, {width: string; height: string}> = {
  small: {width: '150', height: '110'},
  large: {width: '260', height: '200'}
};

function OfferCard({offer, size='large', block, onCardHover} : TOffersProps): JSX.Element {
  const {id, isPremium, price, title, rating, type, previewImage } = offer;

  function handleMouseEnter() {
    onCardHover?.(id);
  }

  function handleMouseLeave() {
    onCardHover?.(null);
  }

  return (
    <article key={id}
      className={`${block}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    <div className={`${block}__image-wrapper place-card__image-wrapper`}>
      <Link to={`${AppRoute.Offer}/${id}`}>
        <img
          className="place-card__image"
          src={previewImage}
          {...sizeMap[size]}
          alt={title}/>
      </Link>
    </div>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonBookmark offer={offer} isBig={false}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            {/* <span style={{ width: '80%' }}> */}
            <span style={{ width: `${getRatingWidth(rating)}%`}}>
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}

export default OfferCard;
