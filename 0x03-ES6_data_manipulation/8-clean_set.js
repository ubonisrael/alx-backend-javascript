export default function cleanSet(set, startString) {
  const arr = [];
  const splitPosition = startString.length;

  for (const x of set.values()) {
    if (x.startsWith(startString)) {
      if (x !== x.slice(splitPosition)) {
        arr.push(x.slice(splitPosition));
      }
    }
  }
  return arr.join('-');
}
