require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

// Enabling CORS
app.use(cors());

// Setting up Morgan
app.use(require('morgan')('dev'));

// Setting up body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setting up database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// Setting up models
require('./models/user');

// Setting up routes
app.use(require('./routes'));


// Setting up server
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${server.address().port}`);
});
