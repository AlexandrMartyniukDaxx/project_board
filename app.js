const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const port = 5000;

app.get('/api', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});