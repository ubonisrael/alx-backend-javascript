import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    const firstLine = 'This is the list of our students\n';
    readDatabase(process.argv[2])
      .then((data) => {
        response.statusCode = 200;
        let output = '';
        const sortedObj = {};
        Object.keys(data).sort().forEach((key) => { sortedObj[key] = data[key]; });
        for (const [key, value] of Object.entries(sortedObj)) {
          output += `Number of students in ${key}: ${
            value.length
          }. List: ${value.join(', ')}\n`;
        }
        output = output.slice(0, -1);
        output = `${firstLine}${output}`;
        response.end(output);
      })
      .catch((err) => {
        const output = err instanceof Error ? err.message : err.toString();
        response.statusCode = 500;
        response.end(firstLine + output);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const firstLine = 'This is the list of our students\n';
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).end('Major parameter must be CS or SWE');
    } else {
      readDatabase(process.argv[2])
        .then((data) => {
          let output = `List: ${data[major].join(', ')}\n`;
          output = output.slice(0, -1);
          output = `${firstLine}${output}`;
          response.status(200).end(output);
        })
        .catch((err) => {
          const output = err instanceof Error ? err.message : err.toString();
          response.status(500).end(firstLine + output);
        });
    }
  }
}
