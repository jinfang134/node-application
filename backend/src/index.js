const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/users', (req, res) => {
  res.json([
    {
      name: 'test',
      id: 1,
      age: 32,
      salary: 100,
    },
    {
      name: 'hello',
      id: 2,
      age: 32,
      salary: 200
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
