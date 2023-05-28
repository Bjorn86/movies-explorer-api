// IMPORT PACKAGES
const router = require('express').Router();

// IMPORT CONTROLLERS
const {
  getAllCards,
  createMovieCard,
  deleteMovieCard,
} = require('../controllers/movies');

// IMPORT VALIDATORS
const {
  createMovieCardValidator,
  deleteMovieCardValidator,
} = require('../middlewares/celebrateValidator');

// GET ALL MOVIES CARDS ROUTE
router.get('/', getAllCards);

// CREATE MOVIE CARD ROUTE
router.post('/', createMovieCardValidator, createMovieCard);

// DELETE MOVIE CARD ROUTE
router.delete('/:cardId', deleteMovieCardValidator, deleteMovieCard);

// MODULE EXPORT
module.exports = router;
