export default function updateUniqueItems(mapObject) {
  if (mapObject instanceof Map) {
    for (const [x, y] of mapObject) {
      if (y === 1) mapObject.set(x, 100);
    }
  } else {
    throw new Error('Cannot process');
  }
}
