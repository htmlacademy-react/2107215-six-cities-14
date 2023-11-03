import {TOffer, TReviews, TCity} from '../types/index';
import {TYPES, DESCRIPTIONS, TITLES, IMAGES, COMMENTS} from '../const';
import {getRandomInt, getRandomArrayElement} from '../utils/common';
const AVATAR_URL = 'https://i.pravatar.cc/128';

const cityMap: TCity = {
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 10
  },
  name: 'Amsterdam',
};

const locations: Record<number, {latitude: number; longitude: number}> = {
  1: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198
  },
  2: {
    latitude: 52.3609553943508,
    longitude:  4.85309666406198
  },
  3: {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198
  },
  4: {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198
  },
  5: {
    latitude: 52.3509553943508,
    longitude: 4.85309666406198
  },
};

function getCityOffer(index: number): TOffer {
  return {
    bedrooms: getRandomInt(0, 20),
    city: cityMap,
    description: getRandomArrayElement(DESCRIPTIONS),
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: index,
      isPro: !!getRandomInt(0, 1),
      name: 'Angelina',
    },
    id: index,
    images: Array.from({length: getRandomInt(0, 30)}, (_, i: number): string => IMAGES[i++]),
    isFavorite: !!getRandomInt(0, 1),
    isPremium: !!getRandomInt(0, 1),
    location: {
      ...locations[index],
      zoom: 8
    },
    maxAdults: getRandomInt(0, 10),
    previewImage: `https://loremflickr.com/248/152?${getRandomInt(1, 400)}`,
    price: getRandomInt(100, 2000),
    rating: getRandomInt(0, 5),
    title: getRandomArrayElement(TITLES),
    type: getRandomArrayElement(TYPES)
  };
}

function getReviews(index: number): TReviews {
  return {
    comment: getRandomArrayElement(COMMENTS),
    date: `2023-${getRandomInt(0, 12).toString().padStart(2, '0')}-02T09:23:20.316Z`,
    id: index,
    rating: getRandomInt(0, 5),
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: index,
      isPro: false,
      name: 'Oliver.conner'
    }
  };
}

const offers: TOffer[] = Array.from({length: 5}, (_, index: number): TOffer => getCityOffer(index + 1));
const reviews: TReviews[] = Array.from({length: 5}, (_, index: number): TReviews => getReviews(index + 1));

export {offers, reviews, cityMap};

