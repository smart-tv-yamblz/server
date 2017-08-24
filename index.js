const express = require('express');
const myMusicOutput = require('./output/my-music');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Listening on port ' + port);
});

app.get('/my-music', function (req, res) {
  res.send(myMusicOutput);
});

app.use(function (req, res) {
  res.status(404).send('404 Not Found');
});

app.use(function (err, req, res) {
  console.dir(err);
  res.status(500).send('500 Server Error');
});