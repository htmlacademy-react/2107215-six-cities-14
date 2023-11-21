import {useAppDispatch} from '../../hooks';
import {ErrorCause} from '../../const';
import {
  fetchOffersAction,
  fetchReviewsAction,
  fetchActiveOfferAction,
  fetchFavoritesAction,
  fetchNearPlacesAction
} from '../../store/api-actions';
import {TOffer} from '../../types';
import styles from './error-element.module.css';

type TErrorProps = {
  cause: typeof ErrorCause[keyof typeof ErrorCause];
  offerId?: TOffer['id'];
  isLarge?: boolean;
}

const ErrorMessage: Record<string, string> = {
  [ErrorCause.FetchOffers]: 'Could not fetch offers!',
  [ErrorCause.FetchActiveOffer]: 'Could not fetch offer!',
  [ErrorCause.FetchNearPlaces]: 'Could not fetch places nerby!',
  [ErrorCause.FetchReviews]: 'Could not fetch reviews!',
  [ErrorCause.FetchFavorites]: 'Could not fetch favorite offers!',
};

function ErrorElement({cause, offerId, isLarge}: TErrorProps): JSX.Element {
  const dispatch = useAppDispatch();

  const ErrorFanction: Record<string, () => void> = {
    [ErrorCause.FetchOffers]: () => {
      dispatch(fetchOffersAction());
    },
    [ErrorCause.FetchActiveOffer]: () => {
      if(offerId) {
        dispatch(fetchActiveOfferAction(offerId));
      }
    },
    [ErrorCause.FetchNearPlaces]: () => {
      if(offerId) {
        dispatch(fetchNearPlacesAction(offerId));
      }
    }
    ,
    [ErrorCause.FetchReviews]: () => {
      if(offerId) {
        dispatch(fetchReviewsAction(offerId));
      }
    },
    [ErrorCause.FetchFavorites]: () => {
      dispatch(fetchFavoritesAction());
    },
  };

  return (
    <section className={`${styles.error} ${(isLarge) && styles.errorLarge}`}>
      <p className={`${styles.errorText}`}>{ErrorMessage[cause]}</p>
      <button
        onClick={() => {
          ErrorFanction[cause]();
        }}
        className={`${styles.replayError} ${(isLarge) && styles.replayErrorLarge}`}
        type="button"
      >
        try again
      </button>
    </section>
  );
}

export default ErrorElement;
