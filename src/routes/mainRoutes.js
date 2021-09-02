const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController.js');
//Routes
router.get('/', mainController.home);
/*
router.get('/login', mainController.login);

router.get('/register', mainController.register);

router.get('/shoppingCar', mainController.shoppingCar);

router.get('/detailproduct', mainController.detailproduct);
*/
module.exports = router;