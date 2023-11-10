import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import {TOffer} from '../../types/index';
import {Helmet} from 'react-helmet-async';
import {AppRoute} from '../../const';
import {Navigate} from 'react-router-dom';
import OfferDetails from '../../components/offer-details/offer-details';
import OffersMap from '../../components/offers-map/offers-map';
import NearOffers from '../../components/near-offers/near-offers';
import {cityMap} from '../../mocks/mocks';

type TOfferProps = {
  offers: TOffer[];
}

function OfferPage({offers}: TOfferProps) {
  const params = useParams().offerId;
  const offerById = offers.find((item) => item.id === params);
  const activeCity = cityMap;

  if(!offerById) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const currentImages = offerById.images.slice(0, 6);

  return (
    <div className="page">
      <Helmet>
        <title>{'6 cities - Offer'}</title>
      </Helmet>
      <Header>
        <Nav/>
      </Header>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {currentImages.map((src): JSX.Element => (
                <div key={src} className="offer__image-wrapper">
                  <a href="#">
                    <img className="offer__image" src={src} alt="Photo studio" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <OfferDetails offer={offerById} />
          <OffersMap
            block="offer"
            offers={offers}
            location={activeCity.location}
          />
        </section>
        <div className="container">
          <NearOffers offers={offers}/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
