import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  authorizationStatusLogin?: AuthorizationStatus;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, authorizationStatusLogin, children} = props;

  function getAuthorization(): JSX.Element {
    if(authorizationStatus === AuthorizationStatus.Auth && authorizationStatusLogin) {
      return <Navigate to={AppRoute.Root} />;
    }

    if(authorizationStatus === AuthorizationStatus.Auth && !authorizationStatusLogin) {
      return children;
    }

    if(authorizationStatus !== AuthorizationStatus.Auth && !authorizationStatusLogin) {
      return <Navigate to={AppRoute.Login} />;
    }

    return children;
  }

  return getAuthorization();
}

export default PrivateRoute;
