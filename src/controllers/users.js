// IMPORT ERRORS
const {
  ValidationError,
  DocumentNotFoundError,
  CastError,
} = require('mongoose').Error;
const NotFoundError = require('../errors/notFoundError');
const IncorrectDataError = require('../errors/incorrectDataError');
const ConflictError = require('../errors/conflictError');

// IMPORT MODELS
const User = require('../models/user');

// IMPORT VARIABLES
const {
  USER_NOT_FOUND_MESSAGE,
  USER_BAD_ID_MESSAGE,
  USER_BAD_DATA_MESSAGE,
  CONFLICT_MESSAGE,
} = require('../utils/constants');

// GET USER INFO
module.exports.getUserInfo = (req, res, next) => {
  User.findById(req.user._id)
    .orFail()
    .then((user) => res.send(user))
    .catch((err) => {
      if (err instanceof DocumentNotFoundError) {
        next(new NotFoundError(USER_NOT_FOUND_MESSAGE));
      } else {
        next(err);
      }
    });
};

// UPDATE USER INFO
module.exports.updateUserInfo = (req, res, next) => {
  const { email, name } = req.body;
  User.findByIdAndUpdate(req.user._id, { email, name }, { new: true, runValidators: true })
    .orFail()
    .then((user) => res.send(user))
    .catch((err) => {
      if (err instanceof DocumentNotFoundError) {
        next(new NotFoundError(USER_NOT_FOUND_MESSAGE));
      } else if (err instanceof CastError) {
        next(new IncorrectDataError(USER_BAD_ID_MESSAGE));
      } else if (err instanceof ValidationError) {
        next(new IncorrectDataError(USER_BAD_DATA_MESSAGE));
      } else if (err.code === 11000) {
        next(new ConflictError(CONFLICT_MESSAGE));
      } else {
        next(err);
      }
    });
};
