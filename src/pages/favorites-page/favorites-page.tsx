import Header from '../../components/general/header';
import Nav from '../../components/general/nav';
import {Offer} from '../../index/index';
import {Helmet} from 'react-helmet-async';
import FavoritesList from '../../components/favorite/favorites-list';

type FavoritesProps = {
  offers: Offer[];
}

function FavoritePage({offers} :FavoritesProps): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>{'6 cities - Favorite'}</title>
      </Helmet>
      <Header>
        <Nav/>
      </Header>
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
