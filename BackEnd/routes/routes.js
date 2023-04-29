const express = require('express');
const router = express.Router();

// user routes
var userController = require('../src/user/userController');
router.route('/user/create').post(userController.createUserControllerFn);

router.route('/user/login').post(userController.loginUserControllerFn);

module.exports = router;