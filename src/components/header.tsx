import Logo from './ui/logo/logo';
import {PropsWithChildren} from 'react';

function Header(props: PropsWithChildren): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {props.children && props.children}
        </div>
      </div>
    </header>
  );
}

export default Header;
