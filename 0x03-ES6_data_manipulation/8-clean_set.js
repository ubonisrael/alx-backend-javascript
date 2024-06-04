export default function cleanSet(set, startString) {
  const arr = [];
  const splitPosition = startString.length;

  if (splitPosition !== 0) {
    for (const x of set.values()) {
      if (x.startsWith(startString)) {
        arr.push(x.slice(splitPosition));
      }
    }
  }
  return arr.join('-');
}
