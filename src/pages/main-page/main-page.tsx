import LocationsList from '../../components/blocks/locations-list';
import CityBoard from '../../components/blocks/city-board';
import CitiesInfo from '../../components/blocks/header';
import Nav from '../../components/blocks/nav';
import {Offer} from '../../types/index';

type MainProps = {
  offers: Offer[];
}

function MainPage({offers}: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <CitiesInfo>
        <Nav/>
      </CitiesInfo>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList />
        <CityBoard offers={offers}/>
      </main>
    </div>
  );
}

export default MainPage;
