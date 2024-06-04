export default function cleanSet(set, startString) {
  if (
    !set || !startString || !(set instanceof Set) || typeof startString !== 'string'
  ) {
    return '';
  }

  const arr = [];
  const splitPosition = startString.length;

  for (const x of set.values()) {
    if (x.startsWith(startString)) {
      arr.push(x.slice(splitPosition));
    }
  }
  return arr.join('-');
}
