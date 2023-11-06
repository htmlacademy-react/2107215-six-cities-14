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

export {formatDate, getRatingWidth};
