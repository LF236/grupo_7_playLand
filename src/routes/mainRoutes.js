const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController.js');
//Routes
router.get('/', mainController.home);

router.get('/login', mainController.login);

router.get('/register', mainController.register);

router.get('/profile', mainController.profile);

router.get('/shoppingCar', mainController.shoppingCar);

router.get('/products', mainController.searchProduct);
router.get('/detailproduct/:id', mainController.detailproduct);

// Routes of products CRUD
router.get('/products/create', mainController.createProduct);
router.post('/products/createnew', mainController.createNewProduct);
router.get('/products/:id/edit', mainController.editProduct);
router.put('/products/:id', mainController.updateProduct);
router.delete('/products/:id', mainController.deleteProduct);


module.exports = router;