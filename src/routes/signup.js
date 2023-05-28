// IMPORT PACKAGES
const router = require('express').Router();

// IMPORT CONTROLLERS
const { createUser } = require('../controllers/signup');

// IMPORT VALIDATORS
const { createUserValidator } = require('../middlewares/celebrateValidator');

// LOGIN ROUTE
router.post('/', createUserValidator, createUser);

// MODULE EXPORT
module.exports = router;
