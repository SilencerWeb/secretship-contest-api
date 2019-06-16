const mongoose = require('mongoose');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { checkSignature } = require('../utils');
const { SECRET_KEY } = require('../constants');

const User = mongoose.model('User');


router.post('/login', async (request, response) => {
  const shouldUserBeAuthorized = checkSignature(request.body);

  if (!shouldUserBeAuthorized) {
    return response.status(400).send({
      message: 'Authorization error',
    });
  }

  const { id } = request.body;
  const user = await User.findOne({ id });
  if (!user) {
    return response.status(400).send({
      message: `User with id ${id} does not exist`,
    });
  }

  const expiresIn = 24 * 60 * 60;
  const token = jwt.sign({ id }, SECRET_KEY, {
    expiresIn: expiresIn,
  });

  return response.send({ user, token });
});

router.post('/verifyToken', (request, response) => {
  const { token } = request.body;

  try {
    jwt.verify(token, SECRET_KEY);
    return response.send({ message: 'valid' });
  } catch (error) {
    return response.status(400).send({
      message: error,
    });
  }
});


module.exports = router;
