import {useParams} from 'react-router-dom';
// import {useEffect} from 'react';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import {TOffer, TOfferPreview} from '../../types/index';
import {Helmet} from 'react-helmet-async';
import {AppRoute} from '../../const';
import {Navigate} from 'react-router-dom';
import OfferDetails from '../../components/offer-details/offer-details';
import OffersMap from '../../components/offers-map/offers-map';
import NearOffers from '../../components/near-offers/near-offers';
import {cityMap} from '../../mocks/mocks';
// import {useAppDispatch} from '../../hooks';
import {getOffers} from '../../store/offers-data/selectors';
import {useAppSelector} from '../../hooks';
// import {fetchOffer, fetchNearPlaces, dropOffer} from '../../store/action';

const MAX_NEAR_PLACES_COUNT = 3;

function OfferPage() {
  const {offerId} = useParams();
  const activeCity = cityMap;

  const offers = useAppSelector(getOffers);
  const currentOffer: TOffer | null = offers.find((offer) => offer.id === offerId) ?? null;
  const nearPlacesToRender: TOfferPreview[] | null = offers.filter((offer) => offer.id !== offerId).slice(0, MAX_NEAR_PLACES_COUNT) ?? null;

  // const dispatch = useAppDispatch();

  // let currentOffer = null;
  // let nearPlacesToRender = null;

  // if(offerId) {
  //   currentOffer = useAppSelector(getOfferById(offerId));
  //   nearPlacesToRender = useAppSelector(getNearPlacesToRender(offerId, MAX_NEAR_PLACES_COUNT));
  // }

  // const currentOffer = offers.find((item) => item.id === offerId);

  // с ретро...............

  // useEffect(() => {
  //   if(offerId) {
  //     dispatch(fetchOffer(offerId));
  //     dispatch(fetchNearPlaces(offerId));
  //   }

  //   return () => {
  //     dispatch(dropOffer());
  //   };
  // }, [offerId, dispatch]);


  // const currentOffer = useAppSelector(getActiveOffer);
  // const nearPlacesToRender = useAppSelector(getNearPlaces).slice(0, MAX_NEAR_PLACES_COUNT);

  if(currentOffer === null || nearPlacesToRender === null) {
    // return null;
    return <Navigate to={AppRoute.NotFound} />;
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
            location={activeCity.location}
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
