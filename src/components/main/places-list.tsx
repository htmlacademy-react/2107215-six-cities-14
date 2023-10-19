import PlaceCard from '../ui/place-card';
import {Offer} from '../../types/index';

type PlacesProps = {
  offers: Offer[];
}

function Places({offers}: PlacesProps): (JSX.Element | null)[] | null {
  return (
    offers.map((item: Offer): JSX.Element => {
      const {images} = item;
      return (
        <article key={item.id} className="cities__card place-card">
          <div className="cities__image-wrapper place-card__image-wrapper">
            <a href="#">
              {images && <img className="place-card__image" src={images[0]} width={260} height={200} alt="Place image"/>}
            </a>
          </div>
          <PlaceCard offer={item}/>
        </article>
      )
    })
  )
}

function PlacesList({offers}: PlacesProps): JSX.Element|null {
  return offers?.length ? (
    <div className="cities__places-list places__list tabs__content">
      <Places offers={offers} />
    </div>
  ) : null;
}

export default PlacesList;
