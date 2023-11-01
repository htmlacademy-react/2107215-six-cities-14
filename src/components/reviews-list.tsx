import RatingForm from './rating-form';
import {comments} from '../mocks/mocks';
import {getDate, getRatingWidth} from '../utils/utils';
import {addPluralEnding} from '../utils/common';

function ReviewsList() {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Review{addPluralEnding(comments.length)} &middot; <span className="reviews__amount">{comments.length <= 10 ? comments.length : 10}</span></h2>
      <ul className="reviews__list">
        {comments.slice(0, 10).map(({user, ...prop}) => (
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
              <time className="reviews__time" dateTime={`${new Date(prop.date).toISOString()}`}>{`${getDate(prop.date)}`}</time>
            </div>
          </li>
        ))}
      </ul>
      <RatingForm />
    </section>
  );
}

export default ReviewsList;
