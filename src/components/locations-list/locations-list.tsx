import cn from 'classnames';
import {CityName} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getActiveCity} from '../../store/app-process/selectors';
import {changeActiveCity} from '../../store/app-process/app-process';
import {memo} from 'react';

const LocationsList = memo((): JSX.Element => {
  const valueCity = Object.values(CityName);
  const activeCity = useAppSelector(getActiveCity);

  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {valueCity.map((item) => (
            <li key={item} className="locations__item">
              <a
                className={cn(
                  'locations__item-link tabs__item',
                  {'tabs__item--active': item === activeCity}
                )}
                href="#"
                onClick={(evt: React.MouseEvent<HTMLElement>) => {
                  evt.preventDefault();
                  dispatch(changeActiveCity(item));
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
});

LocationsList.displayName = 'LocationsList';

export default LocationsList;
