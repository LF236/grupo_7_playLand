const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController.js');
//Routes
router.get('/', mainController.home);

router.get('/login', mainController.login);

router.get('/register', mainController.register);

router.get('/shoppingCar', mainController.shoppingCar);


router.get('/detailproduct/:id', mainController.detailproduct);
router.get('/searchproduct', mainController.searchProduct);

// Routes of products CRUD

router.get('/editproduct/:id', mainController.editProduct);
router.post('/editproduct/:id', mainController.updateProduct);
router.delete('/editproduct/:id', mainController.deleteProduct);


module.exports = router;