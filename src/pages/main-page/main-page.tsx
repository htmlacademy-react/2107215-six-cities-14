import Cities from '../../components/main/cities';
import CitiesInfo from '../../components/general/header';
import Nav from '../../components/general/nav';
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
