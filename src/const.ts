export const MAX_REVIEWS_COUNT = 10;

export const MAX_NEAR_PLACES_COUNT = 3;

export const RviewSymbolLenght = {
  Max: 300,
  Min: 50
} as const;

export const AppRoute = {
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer',
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
  App = 'APP',
  User = 'USER',
  Offers = 'OFFERS',
  Reviews = 'REVIEWS',
  Favorites = 'FAVORITES',
  NearPlaces = 'NEAR_PLACES',
  Offer = 'OFFER',
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
  Reviews = '/comments',
  NearPlaces = '/nearby',
  Favorite = '/favorite',
}

export enum RequestStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export const ErrorCause = {
  FetchOffers: 'FETCH_OFFERS',
  FetchActiveOffer: 'FETCH_ACTIVE_OFFER',
  FetchNearPlaces: 'FETCH_NEAR_PLACES',
  FetchReviews: 'FETCH_REVIEWS',
  FetchFavorites: 'FETCH_FAVORITES',
} as const;
