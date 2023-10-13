import PlacesCard from '../../ui/places-card';
import {Offers} from '../../../types/types';

type PlacesProps = {
  offers: Offers[];
}

function PlacesList({offers}: PlacesProps): JSX.Element|null {
  return offers && offers.length ? (
    <div className="cities__places-list places__list tabs__content">

      {offers.map((item: Offers) => (
        <article key={item.id} className="cities__card place-card">
          <PlacesCard offers={item}/>
        </article>
      ))}
    </div>
  ) : null;
}

export default PlacesList;
