const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  first_name: { type: String, required: true },
  last_name: String,
  username: String,
  avatarUrl: String,
  created: { type: Date, default: Date.now() },
});

userSchema.plugin(uniqueValidator);


mongoose.model('User', userSchema);
