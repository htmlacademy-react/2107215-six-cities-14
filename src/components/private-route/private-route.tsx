import {Navigate} from 'react-router-dom';
import {TAppRoute} from '../../types/index';
import {AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  restrictedFor: AuthorizationStatus;
  redirectTo: TAppRoute;
  children: JSX.Element;
}

function PrivatedRoute({
  restrictedFor,
  redirectTo,
  children,
}: PrivateRouteProps) {
  const authorizationStatus = AuthorizationStatus.Auth;

  return restrictedFor === authorizationStatus ? (
    children
  ) : (
    <Navigate to={redirectTo} />
  );
}

export default PrivatedRoute;
