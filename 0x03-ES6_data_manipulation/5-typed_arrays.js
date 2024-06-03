export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataview = new DataView(buffer, 0, buffer.byteLength);
  //   if (position >= length || position < 0) {
  //     throw new Error('Position outside range');
  //   }
  try {
    dataview.setInt8(position, value);
  } catch (e) {
    throw new Error('Position outside range');
  }
  return dataview;
}
