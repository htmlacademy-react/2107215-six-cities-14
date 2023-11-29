import {Link} from 'react-router-dom';
import {logoutAction} from '../../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {AppRoute} from '../../../const';
import {getUser} from '../../../store/user-process/selectors';
import {getFavoritesOffers} from '../../../store/favorites-data/selectors';

function AuthNavUser(): JSX.Element {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(getUser);
  const favorites = useAppSelector(getFavoritesOffers);

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{userEmail?.email}</span>
          <span className="header__favorite-count">{favorites.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a
          className="header__nav-link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </>
  );
}

export default AuthNavUser;
