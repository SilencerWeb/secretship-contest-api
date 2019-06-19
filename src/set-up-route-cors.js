const cors = require('cors');
const { WHITELISTED_ORIGINS } = require('./constants');


const setUpRouteCors = () => {
  const whitelistedOrigins = [
    ...WHITELISTED_ORIGINS,
  ];

  const isDevelopment = process.env.NODE_ENV !== 'production';
  if (isDevelopment) {
    whitelistedOrigins.push('http://localhost:8080');
  }

  return cors({
    origin: function (origin, callback) {
      if (whitelistedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  });
};


module.exports = { setUpRouteCors };
