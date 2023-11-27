import {FormEvent, useState, ChangeEvent} from 'react';
import {TLoginData} from '../../types';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {getStatusLogin} from '../../store/user-process/selectors';
import {RequestStatus} from '../../const';
import styles from './login-form.module.css';
import cn from 'classnames';

const emailTest = {
  errorText: 'please enter a real email address',
  regex: /[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/,
};

const passwordTest = {
  errorText: 'at least 1 letter and 1 number',
  regex: /\d+[a-zA-Z]+|[a-zA-Z]+\d+/,
};

const formFields = [
  {
    name: 'email',
    label: 'E-mail',
  },
  {
    name: 'password',
    label: 'Password',
  },
];

type TField = {
  value: string;
  hasValue: boolean;
  isValid: boolean;
  errorText: string;
  regex: RegExp;
}

type TFormData = {
  [key: string]: TField;
}

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const loginStatus = useAppSelector(getStatusLogin);

  const [formData, setFormData] = useState<TFormData>({
    email: {
      value: '',
      hasValue: false,
      isValid: false,
      ...emailTest,
    },
    password: {
      value: '',
      hasValue: false,
      isValid: false,
      ...passwordTest,
    }
  });

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const {name, value } = target;
    const rule = formData[name].regex;
    const isValid = rule.test(value);
    const hasValue = !!value.trim();

    setFormData((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
        isValid,
        hasValue,
      }
    }));
  };

  const onSubmit = (authData: TLoginData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      email: formData.email.value,
      password: formData.password.value,
    });
  };

  const isDasabledForm = !(formData.email.isValid && formData.password.isValid) || loginStatus === RequestStatus.Loading || loginStatus === RequestStatus.Error;

  return (
    <form
      className="login__form form"
      action="#"
      method="post"
      onSubmit={handleSubmitForm}
    >
      {formFields.map(({name, label}) => {
        const wrapperClass = cn('login__input-wrapper form__input-wrapper', styles.wrapper);
        const inputClass = cn('login__input form__input', {
          [styles.error]: !formData[name].isValid && formData[name].hasValue
        });
        return (
          <div className={wrapperClass} key={name}>
            <label className="visually-hidden">{label}</label>
            <input
              className={inputClass}
              type={name}
              name={name}
              placeholder={label}
              value={formData[name].value}
              onChange={handleInputChange}
              required
            />
            {!formData[name].isValid && formData[name].hasValue && (
              <p className={styles.text}>{formData[name].errorText}</p>
            )}
          </div>);

      })}
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={isDasabledForm}
      >
        {loginStatus === RequestStatus.Loading
          ? 'loading'
          : 'Sign in'}
      </button>
    </form>
  );
}

export default LoginForm;
