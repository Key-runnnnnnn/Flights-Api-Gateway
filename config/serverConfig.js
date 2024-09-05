const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  BOOKING_PORT: process.env.BOOKING_PORT,
  AUTH_PORT: process.env.AUTH_PORT,
}