import {useAppSelector} from '../../hooks';
import {isAuth} from '../../store/user-process/selectors';
import AuthNavUser from './auth-nav-user/auth-nav-user';
import NotAuthNavUser from './not-auth-nav-user/not-auth-nav-user';
import {useMemo} from 'react';

function Nav(): JSX.Element {
  const authorizationStatus = useAppSelector(isAuth);

  const currentHeaderItem = useMemo(
    () => (authorizationStatus) ? <AuthNavUser/> : <NotAuthNavUser/>,
    [authorizationStatus]
  );

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {currentHeaderItem}
      </ul>
    </nav>
  );
}

export default Nav;
