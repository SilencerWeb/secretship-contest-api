const mongoose = require('mongoose');
const router = require('express').Router();
const { getUserDataFromRequestBody } = require('../utils/get-user-data-from-request-body');
const { getCleanUserObject } = require('../utils/get-clean-user-object');


const User = mongoose.model('User');


// Create user
router.post('/user', async (request, response) => {
  const userId = request.body.id;
  if (!userId) throw Error(`id wasn't provided`);

  const user = await User.findOne({ id: userId });
  if (user) throw Error(`User with id ${userId} already exists`);

  const userData = {
    ...getUserDataFromRequestBody(request.body),
    created: Date.now(),
  };
  if (!userData.first_name) throw Error(`first_name wasn't provided`);

  const createdUser = await User.create(userData);
  response.send(getCleanUserObject(createdUser));
});

// Update user
router.put('/user', async (request, response) => {
  const userId = request.body.id;
  if (!userId) throw Error(`id wasn't provided`);

  const user = await User.findOne({ id: userId });
  if (!user) throw Error(`User with id ${userId} does not exist`);

  const userData = getUserDataFromRequestBody(request.body);

  const userUpdateResponse = await User.updateOne({ id: userId }, userData);

  if (userUpdateResponse.ok === 1) {
    const user = await User.findOne({ id: userId });
    response.send(getCleanUserObject(user));
  }
});

// Get user
router.get('/user', async (request, response) => {
  const userId = request.body.id;
  if (!userId) throw Error(`id wasn't provided`);

  const user = await User.findOne({ id: userId });
  if (!user) throw Error(`User with id ${userId} does not exist`);

  response.send(getCleanUserObject(user));
});


module.exports = router;
