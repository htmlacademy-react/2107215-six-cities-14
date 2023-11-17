import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import {Helmet} from 'react-helmet-async';
import OfferDetails from '../../components/offer-details/offer-details';
import OffersMap from '../../components/offers-map/offers-map';
import NearOffers from '../../components/near-offers/near-offers';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getActiveOffer, getSlicedNearPlaces, getStatusOffer} from '../../store/offers-data/selectors';
import {isAuth} from '../../store/user-process/selectors';
import {dropOffer} from '../../store/action';
import {fetchActiveOfferAction, fetchNearPlacesAction, fetchReviewsAction} from '../../store/api-actions';
import {Status} from '../../const';
import Loading from '../../components/loading/loading';
import RatingForm from '../../components/rating-form/rating-form';
import ReviewsList from '../../components/reviews-list/reviews-list';

function OfferPage() {
  const {offerId} = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if(offerId) {
      dispatch(fetchActiveOfferAction(offerId));
      dispatch(fetchNearPlacesAction(offerId));
      dispatch(fetchReviewsAction(offerId));
    }

    return () => {
      dispatch(dropOffer());
    };
  }, [offerId, dispatch]);

  const currentOffer = useAppSelector(getActiveOffer);
  const nearPlacesToRender = useAppSelector(getSlicedNearPlaces);
  const status = useAppSelector(getStatusOffer);
  const authorizationStatus = useAppSelector(isAuth);

  if (currentOffer === null || status === Status.Loading) {
    return (
      <div className="page">
        <Helmet>
          <title>{'6 cities - Offer'}</title>
        </Helmet>
        <Loading />
      </div>
    );
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
          <OfferDetails offer={currentOffer}>
            <ReviewsList>
              {authorizationStatus && <RatingForm offerId={currentOffer.id}/>}
            </ReviewsList>
          </OfferDetails>
          <OffersMap
            block="offer"
            offers={nearPlacesToRender}
            location={currentOffer.city.location}
          />
        </section>
        <div className="container">
          <NearOffers nearPlacesToRender={nearPlacesToRender}/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
