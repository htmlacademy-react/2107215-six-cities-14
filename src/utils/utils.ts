function getDate(date: Date) {
  return `${new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })}`;
}

function getRatingWidth(rating = 0) {
  return Math.round(rating) * 20;
}

export {getDate, getRatingWidth};
