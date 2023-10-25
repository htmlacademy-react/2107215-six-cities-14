import FavoritesOffers from './favorites-offers';
import {Offer} from '../../index/index';
import {CITIES} from '../../const';

type FavoritesProps = {
  offers: Offer[];
}

// стоит делать эти проверки на наличие свойств и элементов?
function FavoritesList({offers}: FavoritesProps): JSX.Element | null {
  const favoriteslocations = (!offers?.length) ? null : (
    <ul className="favorites__list">
      {CITIES?.map((item) => {
        const filterCards = offers.filter((el) => el.city.name === item && el.isFavorite);
        return (filterCards?.length) ?
          <li key={item} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{item}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              <FavoritesOffers offers={filterCards} />
            </div>
          </li> : null;
      })}
    </ul>);
  return favoriteslocations;
}

export default FavoritesList;
