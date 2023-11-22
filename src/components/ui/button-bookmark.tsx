import cn from 'classnames';
import {TOfferPreview} from '../../types/offer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getIsAuthorized} from '../../store/user-process/selectors';
import {useNavigate} from 'react-router-dom';
import {changeFavoriteStatusAction} from '../../store/api-actions';
import {AppRoute} from '../../const';
import {memo} from 'react';

type TButtonBookmarkProps = {
  offerId: TOfferPreview['id'];
  islarge?: boolean;
  isFavorite: boolean;
}

const ButtonBookmark = memo(({isFavorite, offerId, islarge}: TButtonBookmarkProps): JSX.Element => {

  const isAuthorized = useAppSelector(getIsAuthorized);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const btnClassName = cn('button', {
    'place-card__bookmark-button': !islarge,
    'place-card__bookmark-button--active': isFavorite && !islarge,
    'offer__bookmark-button': islarge,
    'offer__bookmark-button--active': isFavorite && islarge,
  });

  const svgClassName = cn({
    'place-card__bookmark-icon': !islarge,
    'offer__bookmark-icon': islarge,
  });

  const onFavoritesBtnClick = () => {
    if (!isAuthorized) {
      navigate(AppRoute.Login);
    }

    dispatch(changeFavoriteStatusAction({
      id: offerId,
      status: Number(!isFavorite)
    }));
  };

  return (
    <button className={btnClassName} type="button"
      onClick={onFavoritesBtnClick}
    >
      <svg
        className={svgClassName}
        width={islarge ? '31' : '18'}
        height={islarge ? '33' : '19'}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
});

ButtonBookmark.displayName = 'ButtonBookmark';

export default ButtonBookmark;
