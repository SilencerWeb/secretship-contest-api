const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../constants');


const getUserIdFromAuthorizationHeader = (authorizationHeader) => {
  const token = authorizationHeader.replace('Bearer ', '');
  const { id } = jwt.verify(token, SECRET_KEY);

  return id;
};


module.exports = { getUserIdFromAuthorizationHeader };
