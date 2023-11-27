import {TOffer, TCity} from '../types/index';
import {CityName} from '../const';
import {lorem} from 'faker';
import {getRandomInt, getRandomArrayElement, getRandomFloat} from './utils';
// const AVATAR_URL = 'https://i.pravatar.cc/128';
const cities = Object.values(CityName);
const TYPES = ['apartment', 'room', 'house', 'hotel'];

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
};

const citiesMap: Record<string, TCity> = cities.reduce((acc, item, i) => ({
  ...acc,
  [item]: {
    location: {
      ...locationCities[item],
      zoom: 13
    },
    name: cities[i],
  }
}), {});

function getLocations() {
  return {
    location: {
      latitude: getRandomFloat(1, 54, 14),
      longitude: getRandomFloat(1, 4, 14)
    },
  };
}

function getCityOffer(index: number = 1, favorite: {favorite: boolean}): TOffer {
  const {location} = getLocations();
  return {
    bedrooms: getRandomInt(0, 20),
    city: citiesMap[getRandomArrayElement(cities)],
    description: lorem.text(),
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: index.toString(),
      isPro: !!getRandomInt(0, 1),
      name: 'Angelina',
    },
    id: index.toString(),
    images: Array.from({length: getRandomInt(0, 20)}, (): string => `https://loremflickr.com/640/480/nature?${getRandomInt(1, 400)}`),
    isFavorite: (function () {
      if(favorite) {
        return true;
      }
      return !!getRandomInt(0, 1);
    })(),
    isPremium: !!getRandomInt(0, 1),
    location: {
      ...location,
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


const offers: TOffer[] = Array.from({length: 30}, (_, index: number): TOffer => getCityOffer(index + 1, {favorite: false}));
const favoriteOffers = getCityOffer(1, {favorite: true});
// const reviews: TReviews[] = Array.from({length: 5}, (_, index: number): TReviews => getReviews(index + 1));

export {offers, favoriteOffers};
