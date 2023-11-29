import Cities from '../../components/cities/cities';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import {Helmet} from 'react-helmet-async';
import LocationsList from '../../components/locations-list/locations-list';
import Loading from '../../components/loading/loading';
import {getFetchingStatus, getEmptyOffers} from '../../store/offers-data/selectors';
import {fetchOffersAction} from '../../store/api-actions';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {RequestStatus, ErrorCause} from '../../const';
import ErrorElement from '../../components/error-element/error-element';
import {useEffect} from 'react';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  const fetchingStatus = useAppSelector(getFetchingStatus);

  const isEmptyOffers = useAppSelector(getEmptyOffers);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities'}</title>
      </Helmet>
      {fetchingStatus === RequestStatus.Loading && (
        <Loading />
      )}
      {fetchingStatus === RequestStatus.Error && (
        <ErrorElement cause={ErrorCause.FetchOffers} isLarge />
      )}
      {fetchingStatus === RequestStatus.Success && (
        <>
          <Header>
            <Nav />
          </Header>
          <main className={`page__main page__main--index ${isEmptyOffers ? 'page__main--index-empty' : ''}`}>
            <h1 className="visually-hidden">Cities</h1>
            <LocationsList />
            <Cities />
          </main>
        </>
      )}
    </div>
  );
}

export default MainPage;
