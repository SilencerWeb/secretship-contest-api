const mongoose = require('mongoose');
const router = require('express').Router();
const { setUpRouteCors } = require('../set-up-route-cors');
const { getCleanUserObject } = require('../utils');


const User = mongoose.model('User');


// Get users
router.get('/users', setUpRouteCors(), async (request, response) => {
  const users = await User.find({});

  const cleanUsers = users.map((user) => {
    return getCleanUserObject(user);
  });

  return response.send({ users: cleanUsers });
});


module.exports = router;
