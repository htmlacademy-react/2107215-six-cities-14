import {TOffer} from '../../types/index';
import ButtonBookmark from '../ui/button-bookmark';
import RatingForm from '../../components/rating-form/rating-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import {getAuthCheckedStatus} from '../../store/user-process/selectors';
import {useAppSelector} from '../../hooks';
import useDetailsMemo from '../../hooks/use-details-memo';

type TOfferDetailsProps = {
  offer: TOffer;
}

function OfferDetails({offer}: TOfferDetailsProps) {
  const {description, host, type, bedrooms, maxAdults, price, rating, isPremium, title, goods, isFavorite, id} = offer;
  const {currentMaxAdults, currentBedrooms, currentRating} = useDetailsMemo({offer});
  const isAuthorized = useAppSelector(getAuthCheckedStatus);

  const isProAvatar = `${host.isPro ? 'offer__avatar-wrapper--pro ' : ''}`;

  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {isPremium &&
          <div className="offer__mark">
            <span>Premium</span>
          </div>}
        <div className="offer__name-wrapper">
          <h1 className="offer__name">
            {title}
          </h1>
          <ButtonBookmark offerId={offer.id} isFavorite={isFavorite} islarge />
        </div>
        <div className="offer__rating rating">
          <div className="offer__stars rating__stars">
            <span style={{ width: `${currentRating}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="offer__rating-value rating__value">{rating}</span>
        </div>
        <ul className="offer__features">
          <li className="offer__feature offer__feature--entire">
            {type}
          </li>
          <li className="offer__feature offer__feature--bedrooms">
            {`${bedrooms} Bedroom${currentBedrooms}`}
          </li>
          <li className="offer__feature offer__feature--adults">
            {`Max ${maxAdults} adult${currentMaxAdults}`}
          </li>
        </ul>
        <div className="offer__price">
          <b className="offer__price-value">&euro;{price}</b>
          <span className="offer__price-text">&nbsp;night</span>
        </div>
        <div className="offer__inside">
          <h2 className="offer__inside-title">What&apos;s inside</h2>
          <ul className="offer__inside-list">
            {goods.map((item) => (
              <li key={item} className="offer__inside-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="offer__host">
          <h2 className="offer__host-title">Meet the host</h2>
          <div className="offer__host-user user">
            <div className={`offer__avatar-wrapper ${isProAvatar}user__avatar-wrapper`}>
              <img className="offer__avatar user__avatar"
                src={host.avatarUrl}
                width={74}
                height={74}
                alt={host.name}
              />
            </div>
            <span className="offer__user-name">
              {host.name}
            </span>
            {host.isPro &&
            <span className="offer__user-status">
              Pro
            </span>}
          </div>
          <div className="offer__description">
            <p className="offer__text">
              {description}
            </p>
          </div>
        </div>
        <ReviewsList offerId={id}>
          {isAuthorized && <RatingForm offerId={id} />}
        </ReviewsList>
      </div>
    </div>
  );
}

export default OfferDetails;
