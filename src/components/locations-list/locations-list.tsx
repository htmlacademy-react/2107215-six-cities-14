import cn from 'classnames';
import {useState} from 'react';
import {CityName} from '../../const';

function LocationsList(): JSX.Element {
  const [activeItem, setActiveItem] = useState(3);
  const valueCity = Object.values(CityName);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {valueCity.map((item, id) => (
            <li key={item} className="locations__item">
              <a
                className={cn(
                  'locations__item-link tabs__item',
                  {'tabs__item--active': activeItem === id}
                )}
                href="#"
                onClick={(evt: React.MouseEvent<HTMLElement>) => {
                  evt.preventDefault();
                  setActiveItem(id);
                }}
              >
                <span>{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default LocationsList;
