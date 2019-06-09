const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  id: String,
  first_name: String,
  last_name: String,
  username: String,
  avatarUrl: String,
  created: Date,
});

mongoose.model('User', userSchema);
