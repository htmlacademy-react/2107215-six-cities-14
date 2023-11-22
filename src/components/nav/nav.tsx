import {useAppSelector} from '../../hooks';
import {getIsAuthorized} from '../../store/user-process/selectors';
import AuthNavUser from './auth-nav-user/auth-nav-user';
import NotAuthNavUser from './not-auth-nav-user/not-auth-nav-user';
import {useMemo, memo} from 'react';

const Nav = memo((): JSX.Element => {
  const isAuthorized = useAppSelector(getIsAuthorized);

  const currentHeaderItem = useMemo(
    () => (isAuthorized) ? <AuthNavUser/> : <NotAuthNavUser/>,
    [isAuthorized]
  );

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {currentHeaderItem}
      </ul>
    </nav>
  );
});

Nav.displayName = 'Nav';

export default Nav;
