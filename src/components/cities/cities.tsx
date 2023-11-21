import OffersMap from '../offers-map/offers-map';
import {TOfferPreview} from '../../types/index';
import {addPluralEnding} from '../../utils/common';
import {useState, useCallback} from 'react';
import MainEmpty from '../main-emty/main-emty';

import SortingForm from '../sorting-form/sorting-form';
import OffersList from '../offers-list/offers-list';


type CitiesProps = {
  offers: TOfferPreview[];
}

function Cities({offers}: CitiesProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<TOfferPreview['id'] | null>(null);

  const handleCardHover = useCallback((offerId: TOfferPreview['id'] | null) => {
    setActiveOfferId(offerId);
  }, []);
  const activeCity = offers[1].city.name;


  if(!offers.length) {
    return <MainEmpty city={activeCity}/>;
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} place{addPluralEnding(offers.length)} to stay in {' '}{activeCity}</b>
          <SortingForm />
          <OffersList onCardHover={handleCardHover} offers={offers}/>
        </section>
        <div className="cities__right-section">
          <OffersMap
            block="cities"
            offers={offers}
            activeOfferId={activeOfferId}
            location={offers[0].city.location}
          />
        </div>
      </div>
    </div>
  );
}

export default Cities;
