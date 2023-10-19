import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import {Offer} from '../../types/index';

type AppProps = {
  offers: Offer[];
}

function App({offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage offers={offers} />} />
        <Route path={AppRoute.Login}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
              authorizationStatusLogin={AuthorizationStatus.Login}
            >
              <LoginPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritePage offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
