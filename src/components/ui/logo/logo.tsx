import {useLocation} from 'react-router-dom';
import {AppRoute} from '../../../const';
import LogoRootLink from './logo-another-link';
import LogoAnotherLink from './logo-another-link';
import {memo} from 'react';

const Logo = memo((): JSX.Element => {
  const pageUrl = useLocation().pathname;

  return (
    AppRoute.Root === pageUrl ?
      <LogoRootLink /> : <LogoAnotherLink />
  );
});

Logo.displayName = 'Logo';

export default Logo;
