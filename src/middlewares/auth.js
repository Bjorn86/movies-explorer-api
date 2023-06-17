// IMPORT PACKAGES
const jwt = require('jsonwebtoken');

// IMPORT ERRORS
const AuthorizationError = require('../errors/authorizationError');

// CONFIG VARIABLES
const { NODE_ENV, SECRET_KEY } = process.env;
const { MODE_PRODUCTION, DEV_KEY } = require('../utils/config');

// IMPORT VARIABLES
const { AUTHORIZATION_NO_TOKEN_MESSAGE, AUTHORIZATION_BAD_TOKEN_MESSAGE } = require('../utils/constants');

// AUTHORIZATION MIDDLEWARE
module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return next(new AuthorizationError(AUTHORIZATION_NO_TOKEN_MESSAGE));
  }
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === MODE_PRODUCTION ? SECRET_KEY : DEV_KEY);
  } catch (err) {
    return next(new AuthorizationError(AUTHORIZATION_BAD_TOKEN_MESSAGE));
  }
  req.user = payload;
  return next();
};
