const arr = [
  ['Guillaume', 1, 'San Francisco'],
  ['James', 2, 'Columbia'],
  ['Serena', 5, 'San Francisco'],
];

export default function getListStudents() {
  return arr.map((item) => ({
    id: item[1],
    firstName: item[0],
    location: item[2],
  }));
}
