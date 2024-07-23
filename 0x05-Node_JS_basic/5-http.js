const http = require('http');
const { readFile } = require('fs');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    if (typeof process.argv[2] === 'undefined') {
      res.end('Cannot load the database');
    } else {
      readFile(
        process.argv[2],
        { encoding: 'utf8', flag: 'r' },
        (err, data) => {
          if (err) {
            res.end('Cannot load the database');
          } else {
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
            let response = 'This is the list of our students\n';
            response += `Number of students: ${total}\n`;
            for (const [key, value] of Object.entries(obj)) {
              response += `Number of students in ${key}: ${
                value.length
              }. List: ${value.join(', ')}\n`;
            }
            response = response.slice(0, -1);
            res.end(response);
          }
        },
      );
    }
  }
});

app.listen(1245);
module.exports = app;
