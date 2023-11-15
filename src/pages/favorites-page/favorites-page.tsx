import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import {Helmet} from 'react-helmet-async';
import FavoritesList from '../../components/favorites-list/favorites-list';

function FavoritePage(): JSX.Element {
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
            <FavoritesList />
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
