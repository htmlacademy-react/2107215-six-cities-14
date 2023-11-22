
import {SortOption} from '../../const';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {getActiveSortType} from '../../store/app-process/selectors';
import {TSorting} from '../../types/index';
import OptionItem from '../option-item/option-item';
import {setActiveSortType} from '../../store/app-process/app-process';
import {useState, memo} from 'react';
import cn from 'classnames';

const FormSorting = memo((): JSX.Element => {
  const activeSortType = useAppSelector(getActiveSortType);
  const dispatch = useAppDispatch();
  const [isOpened, setIsOpened] = useState(false);

  const sortValue: typeof SortOption[TSorting][] = Object.values(SortOption);

  const optionsClassName = cn(
    'places__options places__options--custom', {
      'places__options--opened': (isOpened)
    });

  const iconStyle = {
    transform: `translateY(-50%) ${isOpened ? 'rotate(180deg)' : ''}`,
  };

  function handleTypeClick() {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  }

  function handleKeydown(evt: React.KeyboardEvent<HTMLFormElement>) {
    if(evt.key === 'Escape' && isOpened) {
      evt.preventDefault();
      setIsOpened(false);
    }
  }

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onKeyDown={handleKeydown}
    >
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleTypeClick}
      >
        {activeSortType}
        <svg
          className="places__sorting-arrow"
          width={7}
          height={4}
          style={iconStyle}
        >
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={optionsClassName}>
        {sortValue.map(((option) => (
          <OptionItem
            key={option}

            option={option}
            isActive={option === activeSortType}
            onOptionClick={() => {
              dispatch(setActiveSortType(option));
              handleTypeClick();
            }}
          />
        )))}
      </ul>
    </form>
  );
});

FormSorting.displayName = 'FormSorting';

export default FormSorting;
