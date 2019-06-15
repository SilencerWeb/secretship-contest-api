const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { checkSignature } = require('../utils');
const { SECRET_KEY } = require('../constants');


router.post('/login', (request, response) => {
  const shouldUserBeAuthorized = checkSignature(request.body);

  if (!shouldUserBeAuthorized) {
    return response.status(400).send({
      message: 'Authorization error',
    });
  }

  const { id } = request.body;
  const expiresIn = 24 * 60 * 60;
  const token = jwt.sign({ id }, SECRET_KEY, {
    expiresIn: expiresIn,
  });

  return response.send({ token });
});

router.post('/verifyToken', (request, response) => {
  const { token } = request.body;

  try {
    jwt.verify(token, SECRET_KEY);
    return response.send({ message: 'success' });
  } catch (error) {
    return response.status(400).send({
      message: error,
    });
  }
});


module.exports = router;
