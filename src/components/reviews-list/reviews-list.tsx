import {formatDate, getRatingWidth} from '../../utils/utils';
import {addPluralEnding} from '../../utils/common';
import {MAX_REVIEWS_COUNT, RequestStatus, ErrorCause} from '../../const';
import {PropsWithChildren} from 'react';
import {getReviewsOffer} from '../../store/reviews-data/selectors';
import {useAppSelector} from '../../hooks';
import {getReviewsStatus} from '../../store/reviews-data/selectors';
import ErrorElement from '../../components/error-element/error-element';
import {TOffer} from '../../types';

type TReviewsListProps = PropsWithChildren<{
  offerId: TOffer['id'];
}>

function ReviewsList ({children, offerId}: TReviewsListProps) {
  const reviewsOffer = useAppSelector(getReviewsOffer);
  const reviewsStatus = useAppSelector(getReviewsStatus);

  const reviewToRender = [...reviewsOffer]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_REVIEWS_COUNT);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Review{addPluralEnding(reviewsOffer.length)} &middot; <span className="reviews__amount">{reviewsOffer.length}</span></h2>
      {reviewsStatus === RequestStatus.Error && (
        <ErrorElement cause={ErrorCause.FetchReviews} offerId={offerId}/>
      )}
      {reviewsStatus === RequestStatus.Success && (
        <ul className="reviews__list">
          {reviewToRender?.map(({user, ...prop}) => (
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
      )}
      {children}
    </section>
  );
}

export default ReviewsList;
