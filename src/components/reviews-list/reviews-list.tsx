import RatingForm from '../rating-form/rating-form';
import {reviews} from '../../mocks/mocks';
import {formatDate, getRatingWidth} from '../../utils/utils';
import {addPluralEnding} from '../../utils/common';
import {MAX_REVIEWS_COUNT} from '../../const';
import { getAuthStatus } from '../../store/user-process/selectors';
import {AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import {getActiveOffer} from '../../store/offers-data/selectors';

function ReviewsList() {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const offer = useAppSelector(getActiveOffer);
  const isAuthReview = (authorizationStatus === AuthorizationStatus.Auth && offer !== null) && <RatingForm offerId={offer.id} />;

  const reviewToRender = [...reviews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_REVIEWS_COUNT);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Review{addPluralEnding(reviews.length)} &middot; <span className="reviews__amount">{reviewToRender.length}</span></h2>
      <ul className="reviews__list">
        {reviewToRender.map(({user, ...prop}) => (
          <li key={prop.id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={user.avatarUrl}
                  width={54}
                  height={54}
                  alt={`${'Reviews avatar'} ${user.name}`}
                />
              </div>
              <span className="reviews__user-name">
                {user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: `${getRatingWidth(prop.rating)}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {prop.comment}
              </p>
              <time className="reviews__time" dateTime={prop.date}>{formatDate(prop.date)}</time>
            </div>
          </li>
        ))}
      </ul>
      {isAuthReview}
      {/* <RatingForm /> */}
    </section>
  );
}

export default ReviewsList;
