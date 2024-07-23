const { readFileSync } = require('fs');

function countStudents(path) {
  try {
    const data = readFileSync(path, { encoding: 'utf8', flag: 'r' }).trim();
    const obj = {};
    let total = 0;
    for (const row of data.split('\n')) {
      const rowData = row.split(',');
      if (rowData[0] !== 'firstname') {
        if (rowData[3] in obj) {
          obj[rowData[3]].push(rowData[0]);
          total += 1;
        } else {
          obj[rowData[3]] = [rowData[0]];
          total += 1;
        }
      }
    }
    console.log(`Number of students: ${total}`);
    for (const [key, value] of Object.entries(obj)) {
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    }
  } catch (error) {
    // console.log(error);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
