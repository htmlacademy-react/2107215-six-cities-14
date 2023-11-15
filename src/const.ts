export const MAX_REVIEWS_COUNT = 10;

export const TIMEOUT_SHOW_ERROR = 2000;

export const DESCRIPTIONS = [
  'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
  'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
  'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.'
];

export const TITLES = [
  'Beautiful & luxurious studio at great location',
  'Our hotel is located in close proximity to the sea and a beautiful sandy beach',
  'Loft Studio in the Central Area',
  'Nice, cozy, warm big bed apartment'
];

export const IMAGES = [
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

export const COMMENTS = [
  'Home is amazing. It like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
];

export const TYPES = ['apartment', 'room', 'house', 'hotel'];

export const RviewSymbolLenght = {
  Max: 300,
  Min: 50
} as const;

export const AppRoute = {
  Login: '/login',
  Favorites: '/favorites',
  Offers: '/offers',
  Root: '/',
  NotFound: '*',
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum NameSpace {
  // App = 'APP',
  User = 'USER',
  Offers = 'OFFERS',
  Reviews = 'REVIEWS',
  Favorites = 'FAVORITES',
  NearPlaces = 'NEAR_PLACES',
  Offer = 'OFFER',
  Login = 'LOGIN',
  Data = 'DATA'
}

export const SortOption = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
};

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments'
}

export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}
