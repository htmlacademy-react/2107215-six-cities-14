import Logo from '../ui/logo';
import {PropsWithChildren} from 'react';

function CitiesInfo(props: PropsWithChildren): JSX.Element {
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

export default CitiesInfo;
