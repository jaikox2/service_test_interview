const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// router
const idxRoute = require('./router/index');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use('/api', idxRoute);


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({
    message: err.message,
  });
});


app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);
});
