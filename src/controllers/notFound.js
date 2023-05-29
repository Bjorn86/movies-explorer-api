// IMPORT ERRORS
const NotFoundError = require('../errors/notFoundError');

// IMPORT VARIABLES
const { URL_NOT_FOUND_MESSAGE } = require('../utils/constants');

// NOT FOUNDED ROUTE
module.exports.notFound = (req, res, next) => {
  next(new NotFoundError(URL_NOT_FOUND_MESSAGE));
};
