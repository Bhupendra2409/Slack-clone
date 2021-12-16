const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController')

router.post('/register', AuthController.register)
router.post('/login',AuthController.login);
router.post('/refreshtoken',AuthController.refreshToken);
router.post('/forgotpassword',AuthController.forgotPassword);
router.put('/resetpassword/:resettoken',AuthController.resetPassword);


module .exports = router;