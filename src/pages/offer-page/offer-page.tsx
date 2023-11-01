import {useParams} from 'react-router-dom';
import Header from '../../components/header';
import Nav from '../../components/nav';
import {TOffer} from '../../types/index';
import {Helmet} from 'react-helmet-async';
import {AppRoute} from '../../const';
import {Navigate} from 'react-router-dom';
import OfferDetails from '../../components/offer-details';
import {CityProvider} from '../../context/city/city-provader';
import OffersMap from '../../components/offers-map';
import NearOffers from '../../components/near-offers';

type TOfferProps = {
  offers: TOffer[];
}

function OfferPage({offers}: TOfferProps) {
  const params = Number(useParams().offerId);
  const offerById = offers.find((item) => item.id === params);

  if(!offerById) {
    return <Navigate to={AppRoute.NotFound} />;
  }

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
              {offerById.images.slice(0, 6).map((src): JSX.Element => (
                <div key={src} className="offer__image-wrapper">
                  <a href="#">
                    <img className="offer__image" src={src} alt="Photo studio" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <OfferDetails offer={offerById} />
          <CityProvider>
            <OffersMap
              block="offer"
              offers={offers}
              size={'small'}
              // selectedPoint={activeOfferId}
              // location={active.location}
              // specialOfferId={hoverOfferId}
            />
          </CityProvider>
        </section>
        <div className="container">
          <NearOffers offers={offers}/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
