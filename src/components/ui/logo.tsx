import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';

// это нужно для того чтобы не было дополнительного рендера страницы
const links = {
  root: <a className="header__logo-link header__logo-link--active"><img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41}/></a>,
  another: <Link className="header__logo-link header__logo-link--active" to="/"><img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41}/></Link>
};

function Logo(): JSX.Element {
  const pageUrl = useLocation().pathname;

  return (
    AppRoute.Root === pageUrl ?
      links.root : links.another
  );
}

export default Logo;
