
import {SortOption} from "../../const";
import {useAppSelector, useAppDispatch} from '../../hooks/';
import {getActiveSortType} from '../../store/app-process/selectors';
import OptionItem from "../option-item/option-item";
import {setActiveSortType} from '../../store/action';

function FormSorting(): JSX.Element {
  const activeSortType = useAppSelector(getActiveSortType);
  const dispatch = useAppDispatch();

  const sortValue = Object.values(SortOption);

  return (
    <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span className="places__sorting-type" tabIndex={0}>
      Popular
    <svg className="places__sorting-arrow" width={7} height={4}>
      <use xlinkHref="#icon-arrow-select" />
    </svg>
    </span>
    <ul className="places__options places__options--custom places__options--opened">
      {sortValue.map((option => (
        <OptionItem
          key={option}
          option={option}
          isActive={option === activeSortType}
          onOptionClick={() => {
            dispatch(setActiveSortType({activeSortType: option}));
          }}
        />
      )))}
    </ul>
  </form>
  )
}

export default FormSorting
