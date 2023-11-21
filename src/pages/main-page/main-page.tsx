import Cities from '../../components/cities/cities';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import {Helmet} from 'react-helmet-async';
import LocationsList from '../../components/locations-list/locations-list';
import Loading from '../../components/loading/loading';
import {getFilteredOffers, getFetchingStatus} from '../../store/offers-data/selectors';
import {useAppSelector} from '../../hooks';
import {RequestStatus, ErrorCause} from '../../const';
import ErrorElement from '../../components/error-element/error-element';

function MainPage(): JSX.Element {
  const fetchingStatus = useAppSelector(getFetchingStatus);
  const currentOffers = useAppSelector(getFilteredOffers);

  const isCurrentOffers = currentOffers?.length ? '' : 'page__main--index-empty';

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities'}</title>
      </Helmet>
      {fetchingStatus === RequestStatus.Loading && (
        <Loading />
      )}
      {fetchingStatus === RequestStatus.Error && (
        <ErrorElement cause={ErrorCause.FetchOffers} />
      )}
      {fetchingStatus === RequestStatus.Success && (
        <>
          <Header>
            <Nav/>
          </Header>
          <main className={`page__main page__main--index ${isCurrentOffers}`}>
            <h1 className="visually-hidden">Cities</h1>
            <LocationsList />
            <Cities offers={currentOffers}/>
          </main>
        </>
      )}
    </div>
  );
}

export default MainPage;
