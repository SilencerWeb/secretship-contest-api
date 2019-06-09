require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const isProduction = process.env.NODE_ENV === 'production';


const app = express();

// Enabling CORS
app.use(cors());

// Setting up body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setting up database
if (isProduction) {
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
} else {
  mongoose.connect('mongodb://localhost:27017/secretship-contest', { useNewUrlParser: true });
  mongoose.set('debug', true);
}

// Setting up models
require('./models/user');

// Setting up routes
app.use(require('./routes'));


// Setting up server
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${server.address().port}`);
});
