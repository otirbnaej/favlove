require("dotenv").config();

module.exports = {
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_KEY_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  // timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
};
