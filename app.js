const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const depositRoutes = require('./routes/routes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/deposits', depositRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
