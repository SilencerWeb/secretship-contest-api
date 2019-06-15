const { createHash, createHmac } = require('crypto');
const { BOT_TOKEN } = require('../constants');


const checkSignature = ({ hash, ...data }) => {
  const secret = createHash('sha256')
    .update(BOT_TOKEN)
    .digest();

  const checkString = Object.keys(data)
    .sort()
    .map((key) => `${key}=${data[key]}`)
    .join('\n');

  const hmac = createHmac('sha256', secret)
    .update(checkString)
    .digest('hex');

  return hmac === hash;
};


module.exports = { checkSignature };
