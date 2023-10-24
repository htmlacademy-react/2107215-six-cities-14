export function getDate(date: Date) {
  return `${new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })}`;
}