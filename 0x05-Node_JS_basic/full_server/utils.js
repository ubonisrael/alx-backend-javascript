const { readFile } = require('fs');

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    } else {
      readFile(path, { encoding: 'utf8', flag: 'r' }, (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        } else {
          const obj = {};
          for (const row of data.trim().split('\n')) {
            const rowData = row.split(',');
            if (rowData[0] !== 'firstname') {
              if (rowData[3] in obj) {
                obj[rowData[3]].push(rowData[0]);
              } else {
                obj[rowData[3]] = [rowData[0]];
              }
            }
          }
          resolve(obj);
        }
      });
    }
  });
}
