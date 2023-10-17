const DESCRIPTIONS = [
  'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
  'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
  'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.'
];

const TITLES = [
  'Beautiful & luxurious studio at great location',
  'Our hotel is located in close proximity to the sea and a beautiful sandy beach',
  'Loft Studio in the Central Area',
  'Nice, cozy, warm big bed apartment'
];

const IMAGES = [
  'https://14.react.pages.academy/static/offer/8.jpg',
  'https://14.react.pages.academy/static/offer/7.jpg',
  'https://14.react.pages.academy/static/offer/17.jpg',
  'https://14.react.pages.academy/static/offer/19.jpg',
  'https://14.react.pages.academy/static/offer/16.jpg',
  'https://14.react.pages.academy/static/offer/9.jpg'
];

const TYPES = ['apartment', 'room', 'house', 'hotel'];

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

enum AppRoute {
  Login = 'login',
  Favorites = 'favorites',
  Offer = 'offer/:id',
  Root = '/',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
  Login = 'LOGIN'
}

export {
  AppRoute,
  AuthorizationStatus,
  DESCRIPTIONS,
  CITIES,
  TITLES,
  TYPES,
  IMAGES
};
