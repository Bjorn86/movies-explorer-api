// IMPORT PACKAGES
const bcrypt = require('bcryptjs');

// IMPORT ERRORS
const { ValidationError } = require('mongoose').Error;
const IncorrectDataError = require('../errors/incorrectDataError');
const ConflictError = require('../errors/conflictError');

// IMPORT MODELS
const User = require('../models/user');

// IMPORT VARIABLES
const {
  CREATE_CODE,
  SIGNUP_BAD_DATA_MESSAGE,
  CONFLICT_MESSAGE,
} = require('../utils/constants');

// CREATE USER
module.exports.createUser = (req, res, next) => {
  const { email, password, name } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({ email, password: hash, name }))
    .then((user) => {
      const data = user.toObject();
      delete data.password;
      res.status(CREATE_CODE).send(data);
    })
    .catch((err) => {
      if (err instanceof ValidationError) {
        next(new IncorrectDataError(SIGNUP_BAD_DATA_MESSAGE));
      } else if (err.code === 11000) {
        next(new ConflictError(CONFLICT_MESSAGE));
      } else {
        next(err);
      }
    });
};
