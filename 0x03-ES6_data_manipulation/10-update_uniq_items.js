export default function updateUniqueItems(mapObject) {
  for (const [x, y] of mapObject) {
    // console.log(x, y);
    if (y === 1) mapObject.set(x, 100);
  }
}
