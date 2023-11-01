import {TOffer, TComment, TCity} from '../types/index';
import {TYPES, DESCRIPTIONS, TITLES, IMAGES, COMMENTS} from '../const';
import {getRandomInt, getRandomArrayElement} from '../utils/common';
const AVATAR_URL = 'https://i.pravatar.cc/128';

const city: TCity = {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    name: 'Amsterdam',
}

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
}

function getCityOffer(index: number): TOffer {
  return {
    bedrooms: getRandomInt(0, 20),
    city: {
      location: {
        ...locations[index],
        zoom: 8
      },
      name: 'Amsterdam',
    },
    description: getRandomArrayElement(DESCRIPTIONS),
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `https://loremflickr.com/248/152?${getRandomInt(1, 400)}`,
      id: index,
      isPro: !!getRandomInt(0, 1),
      name: 'Angelina',
    },
    id: index,
    images: Array.from({length: getRandomInt(0, 30)}, (): string => getRandomArrayElement(IMAGES)),
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

function getComment(index: number): TComment {
  return {
    comment: getRandomArrayElement(COMMENTS),
    date: new Date('Oct 21, 2023 09:46:55'),
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
const comments: TComment[] = Array.from({length: 3}, (_, index: number): TComment => getComment(index + 1));

export {offers, comments, city};

