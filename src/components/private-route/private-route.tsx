import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import {getAuthStatus, getAuthCheckedStatus} from '../../store/user-process/selectors';

type TPrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: TPrivateRouteProps): JSX.Element | null {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const isAuthorized = useAppSelector(getAuthCheckedStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return null;
  }

  return (
    isAuthorized
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
