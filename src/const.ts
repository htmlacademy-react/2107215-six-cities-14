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
  'https://14.react.pages.academy/static/offer/9.jpg',
  'https://14.react.pages.academy/static/offer/5.jpg',
  'https://14.react.pages.academy/static/offer/2.jpg',
  'https://14.react.pages.academy/static/offer/11.jpg',
  'https://14.react.pages.academy/static/offer/4.jpg',
];

const COMMENTS = [
  'Home is amazing. It like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
];

const TYPES = ['apartment', 'room', 'house', 'hotel'];

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const RviewSymbolLenght = {
  Max: 300,
  Min: 50
} as const;

// куда писать тип для перечислений обьявленных как const?
// type AppRouteEnum = typeof AppRoute[keyof typeof AppRoute];
const AppRoute = {
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer',
  Root: '/'
} as const;

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export {
  AppRoute,
  AuthorizationStatus,
  RviewSymbolLenght,
  DESCRIPTIONS,
  COMMENTS,
  CITIES,
  TITLES,
  TYPES,
  IMAGES
};
