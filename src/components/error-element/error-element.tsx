import {useAppDispatch} from '../../hooks';
import {ErrorCause} from '../../const';
import {fetchOffersAction, fetchReviewsAction, fetchActiveOfferAction} from '../../store/api-actions';
import {TOffer} from '../../types';
// import {useNavigate} from "react-router-dom";

type TErrorProps = {
  cause: typeof ErrorCause[keyof typeof ErrorCause];
  offerId?: TOffer['id'];
}

const ErrorMessage: Record<string, string> = {
  [ErrorCause.FetchOffers]: 'Could not fetch offers!',
  [ErrorCause.FetchActiveOffer]: 'Could not fetch offer!',
  // [ErrorCause.FetchNearPlaces]: 'Could not fetch places nerby!',
  // [ErrorCause.FetchReviews]: 'Could not fetch reviews!',
  [ErrorCause.FetchFavorites]: 'Could not fetch favorite offers!',
  // [ErrorCause.Unknown]: 'Something went wrong!',
};

function ErrorElement({cause, offerId}: TErrorProps): JSX.Element {
  const dispatch = useAppDispatch();

  // что тут правильнее затипизировать?
  const ErrorFanction: Record<string, () => void> = {
    [ErrorCause.FetchOffers]: () => {
      dispatch(fetchOffersAction());
    },
    [ErrorCause.FetchActiveOffer]: () => {
      if(offerId) {
        dispatch(fetchActiveOfferAction(offerId));
      }
    },
    [ErrorCause.FetchReviews]: () => {
      if(offerId) {
        dispatch(fetchReviewsAction(offerId));
      }
    }
    // [ErrorCause.FetchFavorites]: 'Could not fetch favorite offers!',
    // [ErrorCause.Unknown]: () => navigate(0),
  };

  return (
    <>
      <p className="error__text">{ErrorMessage[cause]}</p>
      <button
        onClick={() => {
          ErrorFanction[cause]();
        }}
        className="replay replay--error"
        type="button"
      >
        Попробовать ещё раз
      </button>
    </>
  );
}

export default ErrorElement;
