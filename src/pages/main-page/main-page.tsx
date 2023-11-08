import Cities from '../../components/cities/cities';
import CitiesInfo from '../../components/header/header';
import Nav from '../../components/nav/nav';
import {Helmet} from 'react-helmet-async';
import LocationsList from '../../components/locations-list/locations-list';
// import {useAppSelector} from '../../hooks';


function MainPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities'}</title>
      </Helmet>
      <CitiesInfo>
        <Nav/>
      </CitiesInfo>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList />
        <Cities />
      </main>
    </div>
  );
}

export default MainPage;
