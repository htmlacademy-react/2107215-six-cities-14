function getRandomArrayElement (items: string[]): string {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomInt (min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min > max || min < 0 || max < 0) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addPluralEnding(count: number) {
  return count !== 1 ? 's' : '';
}

function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}


export { getRandomArrayElement, getRandomInt, addPluralEnding, capitalize};
