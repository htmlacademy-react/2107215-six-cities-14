import {FormEvent, useState} from 'react';
import {ChangeEvent, useEffect} from 'react';
import {RviewSymbolLenght} from '../../const';
import Rating from '../rating/rating';
import {TReviewData} from '../../types/index';
import {postReviewAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getStatusPost} from '../../store/reviews-data/selectors';
import {Status} from '../../const';
import styles from './rating-form.module.css';

type RatingFormProps = {
  offerId: string;
}

function RatingForm({offerId}: RatingFormProps): JSX.Element {
  const statusPost = useAppSelector(getStatusPost);

  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
    isValid: false,
  });

  const onSubmit = (reviewData: TReviewData) => {
    dispatch(postReviewAction(reviewData));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      id: offerId,
      rating: Number(formData.rating),
      comment: formData.review,
    });
  };

  useEffect(() => {
    if(statusPost === Status.Success) {
      setFormData({
        rating: '',
        review: '',
        isValid: false,
      });
    }
  }, [statusPost]);


  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    const isValid = value.length >= RviewSymbolLenght.Min && value.length <= RviewSymbolLenght.Max;

    setFormData({
      ...formData,
      [name]: value,
      isValid,
    });
  };

  return (
    <form
      className={`reviews__form form ${(statusPost === Status.Error) && styles.formShake} ${(statusPost === Status.Loading) && styles.formUnavailable}`}
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      {statusPost === Status.Error && (
        <div className='reviews__error'>
          <p className={`${styles.reviewsErrorText}`}>
            Failed to post review. Please try again!
          </p>
        </div>

      )}
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating rating={formData.rating} onInputChange={handleInputChange}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        onChange={handleTextAreaChange}
        value={formData.review}
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={statusPost === Status.Loading}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!formData.rating || !formData.isValid || statusPost === Status.Loading}>{statusPost === Status.Loading ? 'loading' : 'Submit'}</button>
      </div>
    </form>
  );
}

export default RatingForm;
