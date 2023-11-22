import {SortOption} from '../const';
import {TOfferPreview} from '../types/index';

function formatDate (dateString: string): string {
  const date = new Date(Date.parse(dateString));
  const month = date.toLocaleString('en-EN', { month: 'long' });
  const year = date.getFullYear();
  return `${month} ${year}`;
}

function getRatingWidth(rating = 0) {
  return Math.round(rating) * 20;
}

function sortByOption (offers: TOfferPreview[], activeSortType: string) {
  switch (activeSortType) {
    case SortOption.Popular:
      return offers.slice();
    case SortOption.LowToHigh:
      return offers.slice().sort((offerA, offerB) => offerA.price - offerB.price);
    case SortOption.HighToLow:
      return offers.slice().sort((offerA, offerB) => offerB.price - offerA.price);
    case SortOption.TopRatedFirst:
      return offers.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      throw new Error(`Unknown activeSortType: ${activeSortType}`);
  }
}

export {formatDate, getRatingWidth, sortByOption};
