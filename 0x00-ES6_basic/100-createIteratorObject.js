export default function createIteratorObject(report) {
  const iterator = [];
  for (const x of Object.values(report.allEmployees)) {
    iterator.push(...x);
  }
  return iterator;
}
