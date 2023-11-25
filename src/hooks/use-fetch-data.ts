import {useAppDispatch} from '../hooks';
import {useEffect} from 'react';
import {fetchOffersAction} from '../store/api-actions';

type TFetchOffers = ReturnType<typeof fetchOffersAction>

function useFetchData(fetchAction: () => TFetchOffers) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchAction());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, fetchAction]);
}

export default useFetchData;
