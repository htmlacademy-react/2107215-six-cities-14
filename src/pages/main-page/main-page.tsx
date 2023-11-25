import Cities from '../../components/cities/cities';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import {Helmet} from 'react-helmet-async';
import LocationsList from '../../components/locations-list/locations-list';
import Loading from '../../components/loading/loading';
import {getFetchingStatus} from '../../store/offers-data/selectors';
import {fetchOffersAction} from '../../store/api-actions';
import {useAppSelector} from '../../hooks';
import {RequestStatus, ErrorCause} from '../../const';
import ErrorElement from '../../components/error-element/error-element';
import {useCallback, useState} from 'react';
import useFetchData from '../../hooks/use-fetch-data';


function MainPage(): JSX.Element {
  useFetchData(fetchOffersAction);

  const fetchingStatus = useAppSelector(getFetchingStatus);

  const [isNoLength, setLengthOffers] = useState<boolean>(false);

  const handleLengthOffers = useCallback((isLength: boolean) => {
    setLengthOffers(isLength);
  }, []);

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
          <main className={`page__main page__main--index ${isNoLength ? 'page__main--index-empty' : ''}`}>
            <h1 className="visually-hidden">Cities</h1>
            <LocationsList />
            <Cities onCityChange={handleLengthOffers} />
          </main>
        </>
      )}
    </div>
  );
}

export default MainPage;
