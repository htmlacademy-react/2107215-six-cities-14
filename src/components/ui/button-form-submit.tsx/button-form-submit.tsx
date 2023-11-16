// import {isStatusLoading} from '../../../store/reviews-data/selectors';
// import {useAppSelector} from '../../../hooks';

// type ButtonFormSubmitProps = {
//   formData: {
//     rating: string;
//     isValid: boolean;
//   }
// }

// function ButtonFormSubmit({formData: {rating, isValid}}: ButtonFormSubmitProps) {
//   const statusLoading = useAppSelector(isStatusLoading);

//   return (
//     <button className="reviews__submit form__submit button" type="submit" disabled={!rating || !isValid || statusLoading}>{statusLoading ? 'loading' : 'Submit'}</button>
//   )
// }

// export default ButtonFormSubmit;
