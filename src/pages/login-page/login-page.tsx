import Header from '../../components/header/header';
import {Helmet} from 'react-helmet-async';
import {Navigate, Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthCheckedStatus} from '../../store/user-process/selectors';
import {AppRoute, CityName} from '../../const';
import {changeActiveCity} from '../../store/app-process/app-process';
import LoginForm from '../../components/login-form/login-form';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(getAuthCheckedStatus);

  const citiesValues = Object.values(CityName);
  const randomCity = citiesValues[Math.floor(Math.random() * citiesValues.length)];

  if (isAuthorized) {
    return (
      <Navigate to={AppRoute.Root} />
    );
  }

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>{'6 cities - Login'}</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm/>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Root}
                onClick={() => dispatch(changeActiveCity(randomCity))}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
