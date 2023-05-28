// IMPORT PACKAGES
const rootRouter = require('express').Router();

// IMPORT ROUTES
const signup = require('./signup');
const signin = require('./signin');
const signout = require('./signout');
const users = require('./users');
const movies = require('./movies');
const notFound = require('./notFound');
const crashTest = require('./crashTest');

// IMPORT MIDDLEWARES
const auth = require('../middlewares/auth');

// ROUTES METHODS
rootRouter.use('/signup', signup);
rootRouter.use('/signin', signin);
rootRouter.use('/signout', auth, signout);
rootRouter.use('/users', auth, users);
rootRouter.use('/movies', auth, movies);
rootRouter.use('/crash-test', crashTest);
rootRouter.use('*', auth, notFound);

// EXPORT ROUTES
module.exports = rootRouter;
