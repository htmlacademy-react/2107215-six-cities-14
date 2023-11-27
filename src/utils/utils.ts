import {SortOption} from '../const';
import {TOfferPreview} from '../types/index';

function formatDate(dateString: string): string {
  const date = new Date(Date.parse(dateString));
  const month = date.toLocaleString('en-EN', { month: 'long' });
  const year = date.getFullYear();
  return `${month} ${year}`;
}

function getRatingWidth(rating = 0) {
  return Math.round(rating) * 20;
}

function sortByOption(offers: TOfferPreview[], activeSortType: string) {
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

function debounce<T extends (...args: unknown[]) => ReturnType<T>>(callback: T, timeoutDelay = 100): ((...args: Parameters<T>) => void) {
  let timeoutId: NodeJS.Timeout;

  return function(this: unknown, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => callback.apply(this, args), timeoutDelay);
  };
}

function getRandomArrayElement (items: string[]): string {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomFloat(min: number, max: number, decimals: number): number {
  const str = (Math.random() * (max - min) + min).toFixed(
    decimals,
  );

  return parseFloat(str);
}

function getRandomInt (min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min > max || min < 0 || max < 0) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {formatDate, getRatingWidth, sortByOption, debounce, getRandomArrayElement, getRandomFloat, getRandomInt};
