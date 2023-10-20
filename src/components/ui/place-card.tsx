import {Offer} from '../../index/offer';
import {Link} from 'react-router-dom';
import {useState} from 'react';

type PlaceProps = {
  offer: Offer;
}

function Premium(): JSX.Element {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

function PlaceCard({offer}: PlaceProps): JSX.Element {
  const {
    id,
    isPremium,
    price,
    title,
    type } = offer;

  const [userFavorites, setUserFavorites] = useState({
    ...offer,
    isFavorite: offer.isFavorite
  });

  return (
    <>
      {isPremium && <Premium/>}
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={ `${'place-card__bookmark-button button'} ${userFavorites.isFavorite && 'place-card__bookmark-button--active'}` } type="button"
            onClick= {() => {
              setUserFavorites({
                ...userFavorites,
                isFavorite: !userFavorites.isFavorite
              })
            }}
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
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

export default PlaceCard;
