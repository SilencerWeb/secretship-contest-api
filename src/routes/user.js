const mongoose = require('mongoose');
const router = require('express').Router();
const { getUserDataFromRequestBody, getCleanUserObject } = require('../utils');


const User = mongoose.model('User');


// Create user
router.post('/user', async (request, response) => {
  const userId = request.body.id;
  if (!userId) {
    return response.status(400).send({
      message: `id wasn't provided`,
    });
  }

  const user = await User.findOne({ id: userId });
  if (user) {
    return response.status(400).send({
      message: `User with id ${userId} already exists`,
    });
  }

  const userData = {
    ...getUserDataFromRequestBody(request.body),
    created: Date.now(),
  };

  const createdUser = await User.create(userData);
  return response.send(getCleanUserObject(createdUser));
});

// Update user
router.put('/user', async (request, response) => {
  const userId = request.body.id;
  if (!userId) {
    return response.status(400).send({
      message: `id wasn't provided`,
    });
  }

  const user = await User.findOne({ id: userId });
  if (!user) {
    return response.status(400).send({
      message: `User with id ${userId} does not exist`,
    });
  }

  const userData = getUserDataFromRequestBody(request.body);

  const userUpdateResponse = await User.updateOne({ id: userId }, userData);

  if (userUpdateResponse.ok === 1) {
    const user = await User.findOne({ id: userId });
    return response.send(getCleanUserObject(user));
  }
});

// Get user
router.get('/user', async (request, response) => {
  const userId = request.body.id;
  if (!userId) {
    return response.status(400).send({
      message: `id wasn't provided`,
    });
  }

  const user = await User.findOne({ id: userId });
  if (!user) {
    return response.status(400).send({
      message: `User with id ${userId} does not exist`,
    });
  }

  return response.send(getCleanUserObject(user));
});


module.exports = router;
