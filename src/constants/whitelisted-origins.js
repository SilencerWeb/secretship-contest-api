const BOT_URL = process.env.BOT_URL;
const WEBSITE_URL = process.env.WEBSITE_URL;


const WHITELISTED_ORIGINS = [
  BOT_URL,
  WEBSITE_URL,
];


module.exports = { WHITELISTED_ORIGINS };
