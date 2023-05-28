// IMPORT PACKAGES
const mongoose = require('mongoose');
const isURL = require('validator/lib/isURL');

// MOVIE SCHEMA
const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Должна быть указана страна создания фильма'],
  },
  director: {
    type: String,
    required: [true, 'Должен быть указан режиссёр фильма'],
  },
  duration: {
    type: Number,
    required: [true, 'Должна быть указана продолжительность фильма'],
  },
  year: {
    type: String,
    required: [true, 'Должен быть указан год выпуска фильма'],
  },
  description: {
    type: String,
    required: [true, 'Должно быть указано описание фильма'],
  },
  image: {
    type: String,
    required: [true, 'Должна быть указана ссылка на постер фильма'],
    validate: {
      validator: (v) => isURL(v),
      message: 'Неправильный формат ссылки',
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'Должна быть указана ссылка на трейлер фильма'],
    validate: {
      validator: (v) => isURL(v),
      message: 'Неправильный формат ссылки',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Должна быть указана ссылка на мини-постер фильма'],
    validate: {
      validator: (v) => isURL(v),
      message: 'Неправильный формат ссылки',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Должен быть указан владелец карточки фильма'],
  },
  movieId: {
    type: Number,
    required: [true, 'Должен быть указан ID фильма'],
  },
  nameRU: {
    type: String,
    required: [true, 'Должно быть указано название фильма на русском языке'],
  },
  nameEN: {
    type: String,
    required: [true, 'Должно быть указано название фильма на английском языке'],
  },
}, { versionKey: false });

// MODULE EXPORT
module.exports = mongoose.model('movie', movieSchema);
