import {TOffer, TReviews, TCity} from '../types/index';
import {TYPES, DESCRIPTIONS, TITLES, IMAGES, COMMENTS, CityName} from '../const';
import {getRandomInt, getRandomArrayElement} from '../utils/common';
const AVATAR_URL = 'https://i.pravatar.cc/128';
const cities = Object.values(CityName);

const locationCities = {
  Paris: {
    latitude: 48.85661,
    longitude: 2.351499,
  },
  Cologne: {
    latitude: 50.938361,
    longitude: 6.959974,
  },
  Brussels: {
    latitude: 50.846557,
    longitude: 4.351697,
  },
  Amsterdam: {
    latitude: 52.37454,
    longitude: 4.897976,
  },
  Hamburg: {
    latitude: 53.550341,
    longitude: 10.000654,
  },
  Dusseldorf: {
    latitude:  51.225402,
    longitude: 6.776314,
  }
}

const citiesMap: Record<string, TCity> = cities.reduce((acc, item, i) => {
  return {
    ...acc,
    [item]: {
      location: {
        ...locationCities[item],
        zoom: 13
      },
      name: cities[i],
    }
  }
}, {});

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

function getCityOffer(i: number): TOffer {
  return {
    bedrooms: getRandomInt(0, 20),
    city: citiesMap[getRandomArrayElement(cities)],
    description: getRandomArrayElement(DESCRIPTIONS),
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: i,
      isPro: !!getRandomInt(0, 1),
      name: 'Angelina',
    },
    id: i,
    images: Array.from({length: getRandomInt(0, 30)}, (_, i: number): string => IMAGES[i++]),
    isFavorite: !!getRandomInt(0, 1),
    isPremium: !!getRandomInt(0, 1),
    location: {
      ...locations[getRandomInt(1, 5)],
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

function getReviews(i: number): TReviews {
  return {
    comment: getRandomArrayElement(COMMENTS),
    date: `2023-${getRandomInt(0, 12).toString().padStart(2, '0')}-02T09:23:20.316Z`,
    id: i,
    rating: getRandomInt(0, 5),
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: i,
      isPro: false,
      name: 'Oliver.conner'
    }
  };
}

const offers: TOffer[] = Array.from({length: 30}, (_, index: number): TOffer => getCityOffer(index + 1));
const reviews: TReviews[] = Array.from({length: 5}, (_, index: number): TReviews => getReviews(index + 1));

export {offers, reviews, cityMap, citiesMap};

