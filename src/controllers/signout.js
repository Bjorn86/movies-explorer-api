// IMPORT VARIABLES
const { SIGNOUT_MESSAGE } = require('../utils/constants');

// LOGOUT
module.exports.logout = (req, res) => {
  res.clearCookie('jwt');
  res.send({ message: SIGNOUT_MESSAGE });
};
