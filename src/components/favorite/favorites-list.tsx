import {TOffer, TOfferPreview} from '../../types/index';
import OfferCard from '../ui/offer-card';

type TFavoritesProps = {
  offers: TOffer[];
}

function getFavoritesByCity(favorites: TOfferPreview[]){
  return favorites.reduce<{[key: string]: TOfferPreview[]}>((acc, curr) => {
    const city = curr.city.name;

    if(!(city in acc)) {
      acc[city] = [];
    }

    acc[city].push(curr);
    return acc;
  }, {});
}

function FavoritesList({offers}: TFavoritesProps) {
  const favoritesByCity = getFavoritesByCity(offers);

  if (!offers?.length) {
    return null;
  }

  return (
    <ul className="favorites__list">
      {Object.entries(favoritesByCity).map(([city, groupedFavorites]) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {groupedFavorites.map((item) =>
              <OfferCard key={item.id} offer={item} size={'small'} block={'favorites'}/>
            )}
          </div>
        </li>
      ))}
    </ul>);
}

export default FavoritesList;
