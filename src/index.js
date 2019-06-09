require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(cors());


const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
} else {
  mongoose.connect('mongodb://localhost:27017/secretship-contest', { useNewUrlParser: true });
  mongoose.set('debug', true);
}


const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${server.address().port}`);
});
