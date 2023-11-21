import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import {Helmet} from 'react-helmet-async';
import FavoritesList from '../../components/favorites-list/favorites-list';
import {fetchFavoritesAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {AppRoute, RequestStatus, ErrorCause} from '../../const';
import {getIsAuthorized} from '../../store/user-process/selectors';
import {getFetchingStatus} from '../../store/favorites-data/selectors';
import Loading from '../../components/loading/loading';
import ErrorElement from '../../components/error-element/error-element';
import {getFavoritesOffers} from '../../store/favorites-data/selectors';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';


function FavoritePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(getIsAuthorized);
  const fetchingStatus = useAppSelector(getFetchingStatus);
  const favorites = useAppSelector(getFavoritesOffers);
  const isEmpty = favorites?.length;

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  if (!isAuthorized) {
    return <Navigate to={AppRoute.Login} />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>{'6 cities - Favorite'}</title>
      </Helmet>
      {(fetchingStatus === RequestStatus.Loading) && (
        <Loading />
      )}
      {(fetchingStatus === RequestStatus.Error) && (
        <ErrorElement cause={ErrorCause.FetchFavorites} isLarge />
      )}
      {(fetchingStatus === RequestStatus.Success) && (
        <>
          <Header>
            <Nav />
          </Header>
          <main className={`page__main page__main--favorites ${!isEmpty && 'page__main--favorites-empty'}`}>
            {!isEmpty && <FavoritesEmpty/>}
            {isEmpty &&
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList />
            </section>
          </div>}
          </main>
          <footer className="footer container">
            <a className="footer__logo-link" href="main.html">
              <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
            </a>
          </footer>
        </>
      )}

    </div>
  );
}

export default FavoritePage;
