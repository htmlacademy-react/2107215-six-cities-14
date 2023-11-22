import Logo from '../ui/logo/logo';
import {PropsWithChildren} from 'react';
import {memo} from 'react';

const Header = memo(({children}: PropsWithChildren): JSX.Element => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Logo />
        </div>
        {children}
      </div>
    </div>
  </header>
),
(oldProps, newProps) => oldProps.children !== newProps.children
);

Header.displayName = 'Header';

export default Header;
