import {SortOption} from '../const';
import {TOfferPreview} from '../types/index';

function formatDate (dateString: string): string {
  const date = new Date(Date.parse(dateString));
  const month = date.toLocaleString('en-EN', { month: 'long' });
  const year = date.getFullYear();
  return `${month} ${year}`;
}

// function formatDate (date: string): string {
//   return new Intl.DateTimeFormat('en-US', {
//     month: 'long',
//     year: 'numeric',
//   }).format(new Date(date));
// };

function getRatingWidth(rating = 0) {
  return Math.round(rating) * 20;
}

function getRandomFloat(min: number, max: number, decimals: number): number {
  const str = (Math.random() * (max - min) + min).toFixed(
    decimals,
  );

  return parseFloat(str);
}

function sortByOption (offers: TOfferPreview[], activeSortType: string) {
  switch (activeSortType) {
    case SortOption.Popular:
      return offers;
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

export {formatDate, getRatingWidth, getRandomFloat, sortByOption};
