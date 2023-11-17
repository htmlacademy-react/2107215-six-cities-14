import Cities from '../../components/cities/cities';
import CitiesInfo from '../../components/header/header';
import Nav from '../../components/nav/nav';
import {Helmet} from 'react-helmet-async';
import LocationsList from '../../components/locations-list/locations-list';
import Loading from '../../components/loading/loading';
import {getStatusOffers} from '../../store/offers-data/selectors';
import {useAppSelector} from '../../hooks';
import {Status} from '../../const';

function MainPage(): JSX.Element {
  const status = useAppSelector(getStatusOffers);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities'}</title>
      </Helmet>
      {status === Status.Loading && (
        <Loading />
      )}
      {status === Status.Success && (
        <>
          <CitiesInfo>
            <Nav/>
          </CitiesInfo>
          <main className="page__main page__main--index">
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
