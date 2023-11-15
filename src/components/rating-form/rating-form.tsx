import {FormEvent, useState} from 'react';
import {ChangeEvent} from 'react';
import {RviewSymbolLenght} from '../../const';
import Rating from '../rating/rating';
import {TReviewData} from '../../types/index';
import {postReviewAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';

type RatingFormProps = {
  offerId: string;
}

function RatingForm({offerId}: RatingFormProps): JSX.Element {
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

    setFormData({
      rating: '',
      review: '',
      isValid: false,
    });
  };

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
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating rating={formData.rating} onInputChange={handleInputChange}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        onChange={handleTextAreaChange}
        value={formData.review}
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!formData.rating || !formData.isValid}>Submit</button>
      </div>
    </form>
  );
}

export default RatingForm;
