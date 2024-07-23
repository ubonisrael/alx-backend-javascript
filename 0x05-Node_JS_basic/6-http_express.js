const Express = require('express');

const app = Express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);
