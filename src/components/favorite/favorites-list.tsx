import FavoritesOffers from './favorites-offers';
import {Offer} from '../../types/index';
import {CITIES} from '../../const';

type FavoritesProps = {
  offers: Offer[];
}

function FavoritesList({offers}: FavoritesProps) {
  const favoritesCards: Offer[][] = [];
  CITIES?.forEach((item) => {
    const filterCards = offers.filter((el) => el.city.name === item && el.isFavorite);
    if(filterCards.length !== 0) {
      favoritesCards.push(filterCards);
    }
  });

  if (!offers?.length) {
    return null;
  }

  return (
    <ul className="favorites__list">
      {favoritesCards.map((item) => (
        <li key={item[0].id} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{item[0].city.name}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            <FavoritesOffers offers={item} />
          </div>
        </li>
      ))}
    </ul>);
}

export default FavoritesList;
