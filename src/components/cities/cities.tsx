import OffersMap from '../offers-map/offers-map';
import {TOfferPreview} from '../../types/index';
import {addPluralEnding} from '../../utils/common';
import OfferCard from '../ui/offer-card';
import {useState} from 'react';
import {useAppSelector} from '../../hooks';
import MainEmpty from '../main-emty/main-emty';
import {getActiveCity} from '../../store/app-process/selectors';
import {getSortedOffers} from '../../store/offers-data/selectors';
import FormSorting from '../form-sorting/form-sorting';
import {getActiveSortType} from '../../store/app-process/selectors';

function Cities(): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<TOfferPreview['id'] | null>(null);

  const handleCardHover = (offerId: TOfferPreview['id'] | null) => setActiveOfferId(offerId);

  useAppSelector(getActiveSortType);
  const activeCity = useAppSelector(getActiveCity);
  const currentOffers = useAppSelector(getSortedOffers);

  if(!currentOffers.length) {
    return <MainEmpty city={activeCity}/>;
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentOffers.length} place{addPluralEnding(currentOffers.length)} to stay in {' '}{activeCity}</b>
          <FormSorting />
          <div className="cities__places-list places__list tabs__content">
            {currentOffers?.map((item) =>
              <OfferCard key={item.id} offer={item} onCardHover={handleCardHover} block={'cities'} size={'large'}/>
            )}
          </div>
        </section>
        <div className="cities__right-section">
          <OffersMap
            block="cities"
            offers={currentOffers}
            activeOfferId={activeOfferId}
            location={currentOffers[0].city.location}
          />
        </div>
      </div>
    </div>
  );
}

export default Cities;
