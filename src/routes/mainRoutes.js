const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController.js');
//Routes
router.get('/', mainController.home);

router.get('/login', mainController.login);

router.get('/register', mainController.register);

router.get('/profile', mainController.profile);

router.get('/shoppingCar', mainController.shoppingCar);


router.get('/detailproduct/:id', mainController.detailproduct);
router.get('/searchproduct', mainController.searchProduct);

router.get('/products/create', mainController.createProduct);
router.post('/products/createnew', mainController.createNewProduct);


// Routes of products CRUD

router.get('/editproduct/:id', mainController.editProduct);
router.post('/editproduct/:id', mainController.updateProduct);
router.delete('/editproduct/:id', mainController.deleteProduct);


module.exports = router;