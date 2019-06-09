const mongoose = require('mongoose');
const router = require('express').Router();
const { getCleanUserObject } = require('../utils/get-clean-user-object');


const User = mongoose.model('User');


// Get users
router.get('/users', async (request, response) => {
  const users = await User.find({});

  const cleanUsers = users.map((user) => {
    return getCleanUserObject(user);
  });

  response.send(cleanUsers);
});


module.exports = router;
