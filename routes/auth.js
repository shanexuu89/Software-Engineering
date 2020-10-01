var express = require('express');
var router = express.Router();
const authController = require ('../controller/auth');

router.post('/signup',authController.signup);
router.post('/login',authController.login);
router.post('/submit',authController.submit);

module.exports = router;

