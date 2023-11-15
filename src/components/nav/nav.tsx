import {useAppSelector} from '../../hooks';
import {getAuthStatus} from '../../store/user-process/selectors';
import {AuthorizationStatus} from '../../const';
import AuthNavUser from './auth-nav-user/auth-nav-user';
import NotAuthNavUser from './not-auth-nav-user/not-auth-nav-user';
import {useMemo} from 'react';

function Nav(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const getCurrentHeaderItem = useMemo(
    () => (isAuth) ? AuthNavUser : NotAuthNavUser,
    [isAuth]
  );


  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {getCurrentHeaderItem()}
      </ul>
    </nav>
  );
}

export default Nav;
