import {getRatingWidth} from '../utils/utils';
import {addPluralEnding} from '../utils/common';
import {useMemo} from 'react';
import {TOffer} from '../types';

type DetailsMemoProps = {
  offer: TOffer;
}

function useDetailsMemo({offer}: DetailsMemoProps) {
  const {maxAdults, bedrooms, rating} = offer;

  const currentMaxAdults = useMemo(
    () => addPluralEnding(maxAdults),
    [maxAdults]
  );

  const currentBedrooms = useMemo(
    () => addPluralEnding(bedrooms),
    [bedrooms]
  );

  const currentRating = useMemo(
    () => getRatingWidth(rating),
    [rating]
  );

  return {currentMaxAdults, currentBedrooms, currentRating};
}

export default useDetailsMemo;
