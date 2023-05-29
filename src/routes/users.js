// IMPORT PACKAGES
const router = require('express').Router();

// IMPORT CONTROLLERS
const { getUserInfo, updateUserInfo } = require('../controllers/users');

// IMPORT VALIDATORS
const { updateUserValidator } = require('../middlewares/celebrateValidator');

// GET USER INFO ROUTE
router.get('/me', getUserInfo);

// UPDATE USER INFO ROUTE
router.patch('/me', updateUserValidator, updateUserInfo);

// MODULE EXPORT
module.exports = router;
