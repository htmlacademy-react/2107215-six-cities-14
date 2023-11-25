import cn from 'classnames';
import {TOfferPreview} from '../../types/offer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthCheckedStatus} from '../../store/user-process/selectors';
import {useNavigate} from 'react-router-dom';
import {changeFavoriteStatusAction} from '../../store/api-actions';
import {getDropFavorited} from '../../store/offers-data/selectors';
import {AppRoute} from '../../const';
import {memo, useState} from 'react';
import {debounce} from '../../utils/utils';

type TButtonBookmarkProps = {
  offerId: TOfferPreview['id'];
  islarge?: boolean;
  isFavorite: boolean;
}

const ButtonBookmark = memo(({isFavorite, offerId, islarge}: TButtonBookmarkProps): JSX.Element => {
  const [isFavorited, setIsFavorited] = useState(isFavorite);
  const dropFavorited = useAppSelector(getDropFavorited);

  if(dropFavorited) {
    if(isFavorited) {
      setIsFavorited(false);
    }
  }

  const isAuthorized = useAppSelector(getAuthCheckedStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const btnClassName = cn('button', {
    'place-card__bookmark-button': !islarge,
    'place-card__bookmark-button--active': isFavorited && !islarge,
    'offer__bookmark-button': islarge,
    'offer__bookmark-button--active': isFavorited && islarge,
  });

  const svgClassName = cn({
    'place-card__bookmark-icon': !islarge,
    'offer__bookmark-icon': islarge,
  });

  function handleFavoritesBtnClick() {
    if (!isAuthorized) {
      navigate(AppRoute.Login);
    }

    if(isAuthorized) {
      setIsFavorited((prevState) => !prevState);

      dispatch(changeFavoriteStatusAction({
        id: offerId,
        status: isFavorited ? 0 : 1
      }));
    }
  }

  return (
    <button
      className={btnClassName}
      type="button"
      onClick={debounce(handleFavoritesBtnClick)}
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
