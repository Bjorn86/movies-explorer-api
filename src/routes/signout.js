// IMPORT PACKAGES
const router = require('express').Router();

// IMPORT CONTROLLERS
const { logout } = require('../controllers/signout');

// LOGIN ROUTE
router.post('/', logout);

// MODULE EXPORT
module.exports = router;
