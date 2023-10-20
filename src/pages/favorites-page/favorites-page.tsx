import CitiesInfo from '../../components/general/header';
import Nav from '../../components/general/nav';
import {Offer} from '../../index/index';
import PlaceCard from '../../components/ui/place-card';
import {CITIES} from '../../const';
import {Helmet} from 'react-helmet-async';

type FavoritesProps = {
  offers: Offer[];
}

function FavoritesList({offers}: FavoritesProps): JSX.Element | null {
    const favoriteslocations = (!offers?.length) ? null :
    <ul className="favorites__list">
      {CITIES.map((item): JSX.Element|null => {
        const filterCards = offers.filter((el) => {
          return el.city.name === item && el.isFavorite;
        })

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
            <FavoritesPlaces offers={filterCards} />
          </div>
        </li> : null;
      })}
    </ul>

   return favoriteslocations
}

function FavoritesPlaces({offers}: FavoritesProps): (JSX.Element | null)[] | null {
  return (
    offers.map((item: Offer): JSX.Element|null => {
      const {images, isFavorite} = item;
      return isFavorite ?
        <article key={item.id} className="favorites__card place-card">
          <div className="favorites__image-wrapper cities__image-wrapper place-card__image-wrapper">
            <a href="#">
              {images && <img className="place-card__image" src={images[0]} width={260} height={200} alt="Place image"/>}
            </a>
          </div>
          <PlaceCard offer={item}/>
        </article>
      : null
    })
  )
}

function FavoritePage({offers} :FavoritesProps): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>{'6 cities - Favorite'}</title>
      </Helmet>
      <CitiesInfo>
        <Nav/>
      </CitiesInfo>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>
  );
}

export default FavoritePage;
