import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type AppRouteEnum = typeof AppRoute[keyof typeof AppRoute];

type PrivateRouteProps = {
  restrictedFor: AuthorizationStatus;
  redirectTo: AppRouteEnum;
  children: JSX.Element;
}

function PrivatedRoute({
  restrictedFor,
  redirectTo,
  children,
}: PrivateRouteProps) {
  const authorizationStatus = AuthorizationStatus.NoAuth;

  return restrictedFor === authorizationStatus ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );
}

export default PrivatedRoute;
