export const secondsSince: (date: Date) => number = date => {
  const now = new Date().getTime();
  const seconds = (now - date.getTime()) / 1000;

  return seconds;
};

export const minutesSince: (date: Date) => number = date => {
  return secondsSince(date) / 60;
};

export const hoursSince: (date: Date) => number = date => {
  return secondsSince(date) / (60 * 60);
};

export const daysSince: (date: Date) => number = date => {
  return secondsSince(date) / (60 * 60 * 24);
};

export const weeksSince: (date: Date) => number = date => {
  return secondsSince(date) / (60 * 60 * 24 * 7);
};

export const monthsSince: (date: Date) => number = date => {
  return secondsSince(date) / (60 * 60 * 24 * 30);
};

export const yearsSince: (date: Date) => number = date => {
  return secondsSince(date) / (60 * 60 * 24 * 365);
};

export const formatDate: (date: Date) => string = date => {
  return new Intl.DateTimeFormat().format(new Date(date));
};

export const bigNumberToWord: (nr: number) => string = nr => {
  if (nr > 1000000) {
    return `${(nr / 1000000).toFixed(2)} M`;
  }
  if (nr > 1000) {
    return `${(nr / 1000).toFixed(1)} K`;
  }

  return nr.toFixed(0);
};

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
export function shuffleArray<T>(a: T[]): T[] {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
