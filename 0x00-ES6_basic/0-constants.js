export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
// function taskFirst() {
//   const task = 'I prefer const when I can.';
//   return task;
// }

// function getLast() {
//   return ' is okay';
// }

// function taskNext() {
//   let combination = 'But sometimes let';
//   combination += getLast();

//   return combination;
// }

// module.exports = { taskFirst, taskNext };
