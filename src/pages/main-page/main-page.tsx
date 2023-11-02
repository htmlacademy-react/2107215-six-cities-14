import Cities from '../../components/cities/cities';
import CitiesInfo from '../../components/header/header';
import Nav from '../../components/nav/nav';
import {TOffer} from '../../types/index';
import {Helmet} from 'react-helmet-async';

type TMainProps = {
  offers: TOffer[];
}

function MainPage({offers}: TMainProps): JSX.Element {

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
        <Cities offers={offers}/>
      </main>
    </div>
  );
}

export default MainPage;
