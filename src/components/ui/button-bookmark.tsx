import cn from 'classnames';
import {useState} from 'react';
import {Offer} from '../../index/offer';

type ButtonBookmarkProp = {
  offer: Offer;
  isBig?: boolean;
}

function ButtonBookmark({offer, isBig}: ButtonBookmarkProp): JSX.Element {
  const [userFavorites, setUserFavorites] = useState({
    isFavorite: offer.isFavorite
  });

  const btnClassName = cn('button', {
    'place-card__bookmark-button': !isBig,
    'place-card__bookmark-button--active': userFavorites.isFavorite && !isBig,
    'offer__bookmark-button': isBig,
    'offer__bookmark-button--active': userFavorites.isFavorite && isBig,
  });

  const svgClassName = cn({
    'place-card__bookmark-icon': !isBig,
    'offer__bookmark-icon': isBig,
  });

  return (
    <button className={btnClassName} type="button"
      onClick= {() => {
        setUserFavorites({
          isFavorite: !userFavorites.isFavorite
        });
      }}
    >
      <svg
        className={svgClassName}
        width={isBig ? '31' : '18'}
        height={isBig ? '33' : '19'}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default ButtonBookmark;
