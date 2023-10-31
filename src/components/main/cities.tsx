import OffersMap from '../general/offers-map';
import {TOfferPreview} from '../../types/index';
import LocationsList from '../../components/main/locations-list';
import {addPluralEnding} from '../../utils/common'
import OfferCard from '../ui/offer-card';
import {useState} from 'react';


type TCitiesProps = {
  offers: TOfferPreview[];
}

function Cities({offers}: TCitiesProps): JSX.Element | null {
  const [activeOfferId, setActiveOfferId] = useState<TOfferPreview['id'] | null>(null);

  const handleCardHover = (offerId: TOfferPreview['id'] | null) => setActiveOfferId(offerId);

  if(!offers?.length) {
    return null;
  }

  return (
    <>
    <LocationsList />
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} place{addPluralEnding(offers.length)} to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width={7} height={4}>
                <use xlinkHref="#icon-arrow-select" />
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((item) =>
              <OfferCard offer={item} onCardHover={handleCardHover} block={'cities'} size={'large'}/>
            )}
          </div>
        </section>
        <OffersMap
          block="cities"
          offers={offers}
          selectedPoint={activeOfferId}
          // location={active.location}
          // specialOfferId={hoverOfferId}
        />
      </div>
    </div>
    </>
  );
}

export default Cities;
