import {FormEvent, useState, ChangeEvent, useEffect, memo, useCallback} from 'react';
import {RviewSymbolLenght} from '../../const';
import Rating from '../rating/rating';
import {TReviewData} from '../../types/index';
import {postReviewAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getStatusPost} from '../../store/reviews-data/selectors';
import {RequestStatus} from '../../const';
import styles from './rating-form.module.css';

type TRatingFormProps = {
  offerId: string;
}

const RatingForm = memo(({offerId}: TRatingFormProps): JSX.Element => {
  const statusPost = useAppSelector(getStatusPost);

  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    review: '',
    isValid: false,
  });

  const [ratingData, setRatingData] = useState({
    rating: '',
  });

  const onSubmit = (reviewData: TReviewData) => {
    dispatch(postReviewAction(reviewData));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      id: offerId,
      rating: Number(ratingData.rating),
      comment: formData.review,
    });
  };

  useEffect(() => {
    if(statusPost === RequestStatus.Success) {
      setFormData({
        review: '',
        isValid: false,
      });

      setRatingData({
        rating: '',
      });
    }
  }, [statusPost]);


  const handleInputChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;

    setRatingData({
      rating: value,
    });
  }, []);

  const handleTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    const isValid = value.length >= RviewSymbolLenght.Min && value.length <= RviewSymbolLenght.Max;

    setFormData({
      ...formData,
      [name]: value,
      isValid,
    });
  };

  const formClassName = `reviews__form form ${(statusPost === RequestStatus.Error) && styles.formShake} ${(statusPost === RequestStatus.Loading) && styles.formUnavailable}`;
  const btnDisabled = !ratingData.rating || !formData.isValid || statusPost === RequestStatus.Loading;

  return (
    <form
      className={formClassName}
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      {statusPost === RequestStatus.Error && (
        <div className='reviews__error'>
          <p className={`${styles.reviewsErrorText}`}>
            Failed to post review. Please try again!
          </p>
        </div>
      )}
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating rating={ratingData.rating} onInputChange={handleInputChange}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        onChange={handleTextAreaChange}
        value={formData.review}
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={statusPost === RequestStatus.Loading}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={btnDisabled}>
          {statusPost === RequestStatus.Loading ? 'loading' : 'Submit'}
        </button>
      </div>
    </form>
  );
});

RatingForm.displayName = 'RatingForm';

export default RatingForm;
