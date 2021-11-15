const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const { v4: uuid } = require('uuid');
const path = require('path');
const mainController = require('../controllers/mainController.js');

// Config files update
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const id_user = uuid();
        req.body['id_user'] = id_user;
        const path_image_user = path.join(__dirname + '/../public/img/profile_images/' + id_user);
        if(!fs.existsSync(path_image_user)) {
            fs.mkdirSync(path_image_user);
        }
        callback(null, path_image_user);
    },

    filename: (req, file, callback) => {
        const id_user = req.body.id_user;
        console.log(id_user);
        callback(null, `perfil_${id_user}`);
    }
});

const upload = multer({ storage });
// Routes
router.get('/', mainController.home);

router.get('/login', mainController.login);

router.get('/register', mainController.register);
router.post('/register', upload.fields([ { name: 'avatar', maxCount: 1 } ]), mainController.registerCreateUser)
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


router.get('/test', mainController.test);
module.exports = router;