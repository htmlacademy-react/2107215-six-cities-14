import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import Header from '../../components/header/header';
import Nav from '../../components/nav/nav';
import {Helmet} from 'react-helmet-async';
import OfferDetails from '../../components/offer-details/offer-details';
import OffersMap from '../../components/offers-map/offers-map';
import NearOffers from '../../components/near-offers/near-offers';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getActiveOffer, getSlicedNearPlaces, getOfferStatus, getNearPlacesStatus} from '../../store/offers-data/selectors';
import {getIsAuthorized} from '../../store/user-process/selectors';
import {dropOffer} from '../../store/offers-data/offers-data';
import {fetchActiveOfferAction, fetchNearPlacesAction, fetchReviewsAction} from '../../store/api-actions';
import {RequestStatus, ErrorCause} from '../../const';
import Loading from '../../components/loading/loading';
import RatingForm from '../../components/rating-form/rating-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import ErrorElement from '../../components/error-element/error-element';

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
  const offerStatus = useAppSelector(getOfferStatus);
  const isAuthorized = useAppSelector(getIsAuthorized);
  const nearPlacesStatus = useAppSelector(getNearPlacesStatus);

  return (
    <div className="page">
      <Helmet>
        <title>{'6 cities - Offer'}</title>
      </Helmet>
      {(offerStatus === RequestStatus.Loading || currentOffer === null) && (
        <Loading />
      )}
      {offerStatus === RequestStatus.Error && (
        <ErrorElement cause={ErrorCause.FetchActiveOffer} offerId={offerId}/>
      )}
      {(offerStatus === RequestStatus.Success && currentOffer !== null) && (
        <>
          <Header>
            <Nav/>
          </Header>
          <main className="page__main page__main--offer">
            <section className="offer">
              <div className="offer__gallery-container container">
                <div className="offer__gallery">
                  {currentOffer.images.slice(0, 6).map((src): JSX.Element => (
                    <div key={src} className="offer__image-wrapper">
                      <a href="#">
                        <img className="offer__image" src={src} alt="Photo studio" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <OfferDetails offer={currentOffer}>
                <ReviewsList offerId={currentOffer.id}>
                  {isAuthorized && <RatingForm offerId={currentOffer.id}/>}
                </ReviewsList>
              </OfferDetails>
              <OffersMap
                block="offer"
                offers={nearPlacesToRender}
                location={currentOffer.city.location}
              />
            </section>
            <div className="container">
              {nearPlacesStatus === RequestStatus.Error && (
                <ErrorElement cause={ErrorCause.FetchNearPlaces} offerId={offerId}/>
              )}
              {nearPlacesStatus === RequestStatus.Success && (
                <NearOffers nearPlacesToRender={nearPlacesToRender}/>
              )}
            </div>
          </main>
        </>
      )}

    </div>
  );
}

export default OfferPage;
