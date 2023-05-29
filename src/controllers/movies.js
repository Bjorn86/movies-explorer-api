// IMPORT ERRORS
const {
  ValidationError,
  DocumentNotFoundError,
  CastError,
} = require('mongoose').Error;
const ForbiddenError = require('../errors/forbiddenError');
const NotFoundError = require('../errors/notFoundError');
const IncorrectDataError = require('../errors/incorrectDataError');

// IMPORT MODELS
const Movie = require('../models/movie');

// IMPORT VARIABLES
const {
  CREATE_CODE,
  MOVIE_BAD_DATA_MESSAGE,
  MOVIE_FORBIDDEN_MESSAGE,
  MOVIE_DELETE_MESSAGE,
  MOVIE_DELETE_NOT_FOUND_MESSAGE,
  MOVIE_FIND_NOT_FOUND_MESSAGE,
  MOVIE_BAD_ID_MESSAGE,
} = require('../utils/constants');

// GET USER MOVIES CARDS
module.exports.getUserCards = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .orFail()
    .then((cards) => res.send(cards))
    .catch((err) => {
      if (err instanceof DocumentNotFoundError) {
        next(new NotFoundError(MOVIE_FIND_NOT_FOUND_MESSAGE));
      } else {
        next(err);
      }
    });
};

// CREATE MOVIE CARD
module.exports.createMovieCard = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: req.user._id,
  })
    .then((card) => res.status(CREATE_CODE).send(card))
    .catch((err) => {
      if (err instanceof ValidationError) {
        next(new IncorrectDataError(MOVIE_BAD_DATA_MESSAGE));
      } else {
        next(err);
      }
    });
};

// DELETE CARD
module.exports.deleteMovieCard = (req, res, next) => {
  Movie.findById(req.params.cardId)
    .orFail()
    .then((card) => {
      Movie.deleteOne({ _id: card._id, owner: req.user._id })
        .then((result) => {
          if (result.deletedCount === 0) {
            throw new ForbiddenError(MOVIE_FORBIDDEN_MESSAGE);
          }
          res.send({ message: MOVIE_DELETE_MESSAGE });
        })
        .catch(next);
    })
    .catch((err) => {
      if (err instanceof DocumentNotFoundError) {
        next(new NotFoundError(MOVIE_DELETE_NOT_FOUND_MESSAGE));
      } else if (err instanceof CastError) {
        next(new IncorrectDataError(MOVIE_BAD_ID_MESSAGE));
      } else {
        next(err);
      }
    });
};
