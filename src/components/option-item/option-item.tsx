import cn from 'classnames';

type OptionItemProps = {
  isActive: boolean;
  option: string;
  onOptionClick: () => void;
}

function OptionItem({isActive, option, onOptionClick}: OptionItemProps): JSX.Element {
  const optionClassName = cn('places__option', {
    'places__option--active': (isActive)
  });

  return (
    <li key={option} className={optionClassName} onClick={() => onOptionClick()} tabIndex={0}>{option}</li>
  );
}

export default OptionItem;
