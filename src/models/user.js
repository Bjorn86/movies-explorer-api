// IMPORT PACKAGES
const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const bcrypt = require('bcryptjs');

// IMPORT ERRORS
const AuthorizationError = require('../errors/authorizationError');

// IMPORT VARIABLES
const { AUTHORIZATION_ERROR_MESSAGE } = require('../utils/constants');

// USER SCHEMA
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Поле "email" должно быть заполнено'],
    validate: {
      validator: (v) => isEmail(v),
      message: 'Неправильный формат почты',
    },
  },
  password: {
    type: String,
    required: [true, 'Поле "password" должно быть заполнено'],
    select: false,
  },
  name: {
    type: String,
    required: [true, 'Поле "name" должно быть заполнено'],
    minlength: [2, 'Минимальная длина поля "name" 2 символа'],
    maxlength: [30, 'Максимальная длина поля "name" 30 символов'],
  },
}, {
  versionKey: false,
  // FIND USER BY CREDENTIALS METHOD
  statics: {
    findUserByCredentials(email, password) {
      return this.findOne({ email }).select('+password')
        .then((user) => {
          if (!user) {
            throw new AuthorizationError(AUTHORIZATION_ERROR_MESSAGE);
          }
          return bcrypt.compare(password, user.password)
            .then((matched) => {
              if (!matched) {
                throw new AuthorizationError(AUTHORIZATION_ERROR_MESSAGE);
              }
              return user;
            });
        });
    },
  },
});

// MODULE EXPORT
module.exports = mongoose.model('user', userSchema);
