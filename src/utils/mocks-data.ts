import {lorem} from 'faker';
import {getRandomInt, getRandomArrayElement} from './utils';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {TState, TUserData, TOffer, TReviews, TLoginData} from '../types/index';
import {createAPI} from '../services/api';

const AVATAR_URL = 'https://i.pravatar.cc/128';

const TYPES = ['apartment', 'room', 'house', 'hotel'];

export type TAppThunkDispatch = ThunkDispatch<TState, ReturnType<typeof createAPI>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const fakeUserData: TUserData = {
  name: 'test',
  avatarUrl: 'https://test/test.png',
  isPro: false,
  email: 'test@test.ru',
  token: 'secret'
};

export const fakeLoginData: TLoginData = {
  email: 'test@test.ru',
  password: '123456'
};

export const fakeId = '1';

export const fakeReview = {
  id: fakeId,
  rating: 5,
  comment: 'comment'
};

export const fakeFavoriteStatusOne = { id: fakeId, status: 1 };

export const fakeFavoriteStatusZero = { id: fakeId, status: 0 };

function getCityOffer(favorite: {favorite: boolean}): TOffer {
  return {
    bedrooms: getRandomInt(0, 20),
    city: {
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      },
      name: 'Hamburg',
    },
    description: lorem.text(),
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: fakeId,
      isPro: !!getRandomInt(0, 1),
      name: 'Angelina',
    },
    id: fakeId,
    images: Array.from({length: getRandomInt(0, 20)}, (): string => `https://loremflickr.com/640/480/nature?${getRandomInt(1, 400)}`),
    isFavorite: (function () {
      if(favorite) {
        return true;
      }
      return !!getRandomInt(0, 1);
    })(),
    isPremium: !!getRandomInt(0, 1),
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 8
    },
    maxAdults: getRandomInt(0, 10),
    previewImage: `https://loremflickr.com/640/480/abstract?${getRandomInt(1, 400)}`,
    price: getRandomInt(100, 2000),
    rating: getRandomInt(0, 5),
    title: lorem.words(7),
    type: getRandomArrayElement(TYPES)
  };
}

export const review: TReviews = {
  comment: lorem.text(),
  date: `2023-${getRandomInt(0, 12).toString().padStart(2, '0')}-02T09:23:20.316Z`,
  id: fakeId,
  rating: getRandomInt(0, 5),
  user: {
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    id: fakeId,
    isPro: false,
    name: 'test'
  }
}

export const offer = getCityOffer({favorite: false});

export const favoriteOffer = getCityOffer({favorite: true});

export const noFavoriteOffer = {
  ...favoriteOffer,
  isFavorite: false,
};
