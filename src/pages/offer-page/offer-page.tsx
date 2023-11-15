import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import {Helmet} from 'react-helmet-async';
import OfferDetails from '../../components/offer-details/offer-details';
import OffersMap from '../../components/offers-map/offers-map';
import NearOffers from '../../components/near-offers/near-offers';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getActiveOffer, getNearPlaces, getStatusOffer} from '../../store/offers-data/selectors';
import {dropOffer} from '../../store/action';
import {fetchActiveOfferAction, fetchOffersNearbyAction} from '../../store/api-actions';
import {Status, MAX_NEAR_PLACES_COUNT} from '../../const';
import Loading from '../../components/loading/loading';
import NotFoundPage from '../not-found-page/not-found-page';

function OfferPage() {
  const {offerId} = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if(offerId) {
      dispatch(fetchActiveOfferAction(offerId));
      dispatch(fetchOffersNearbyAction(offerId));
    }

    return () => {
      dispatch(dropOffer());
    };
  }, [offerId, dispatch]);

  const currentOffer = useAppSelector(getActiveOffer);
  const nearPlacesToRender = useAppSelector(getNearPlaces).slice(0, MAX_NEAR_PLACES_COUNT);
  const status = useAppSelector(getStatusOffer);

  if (currentOffer === null || status === Status.Idle || status === Status.Loading) {
    return <Loading />;
  }

  if (status === Status.Error) {
    return <NotFoundPage />;
  }

  const currentImages = currentOffer.images.slice(0, 6);

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
          <OfferDetails offer={currentOffer} />
          <OffersMap
            block="offer"
            offers={nearPlacesToRender}
            location={currentOffer.city.location}
          />
        </section>
        <div className="container">
          <NearOffers offers={nearPlacesToRender}/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
