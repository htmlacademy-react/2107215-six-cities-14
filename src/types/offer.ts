import {TUser} from '.';

// в дальнейшем возможно сужение типа сделаю
// export type TCity = {
//   location: TLocation;
//   name: CityName;
// }

export type TCity = {
  location: TLocation;
  name: string;
}

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TOfferPreview = {
  city: TCity;
  goods: string[];
  id: number;
  isFavorite: boolean;
  isPremium: boolean;
  location: TLocation;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type TOffer = TOfferPreview & {
  bedrooms: number;
  description: string;
  host: TUser;
  images: string[];
  maxAdults: number;
}
