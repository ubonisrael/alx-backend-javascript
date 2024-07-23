const { readFile } = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, { encoding: 'utf8', flag: 'r' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      const obj = {};
      let total = 0;
      for (const row of data.trim().split('\n')) {
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
      resolve(true);
    });
  });
}

module.exports = countStudents;
