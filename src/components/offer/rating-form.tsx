import {FormEvent, useState} from 'react';
import {ChangeEvent} from 'react';
import {RviewSymbolLenght} from '../../const';
import Rating from './rating';

function RatingForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
    isValid: false,
  });

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
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
      onSubmit={(evt: FormEvent<HTMLFormElement>) => handleFormSubmit(evt)}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating rating={formData.rating} onChange={(evt) => handleInputChange(evt)}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        onChange={(evt) => {
          handleTextAreaChange(evt);
        }}
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