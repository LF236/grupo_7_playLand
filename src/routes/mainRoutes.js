const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const { v4: uuid } = require('uuid');
const path = require('path');
const mainController = require('../controllers/mainController.js');
const { validarRegistroUsuario } = require('../helpers/validarRegistroUsuario');
const generaID = (req, res, next) =>{
    const id_aleatorio = uuid()
    req['id'] = id_aleatorio;
    next();
}
// Config files update
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        // Verificamos si los archivos a subir son parte del modelo de productos
        if((file.fieldname == "imagenesComplementarias") || file.fieldname == "main_image") {
            const id_img = req.id;
            //console.log(id_img);
            const path_img_products = path.join(__dirname + '/../public/img/products_img/' + id_img);
            // Si no existe la carpeta con el ID, se deberá crear
            if(!fs.existsSync(path_img_products)) {
                fs.mkdirSync(path_img_products);
            }
            callback(null, path_img_products);
        }
        // Si no, quiere decir que es la imágene de perfil
        else {
            const id_user = uuid();
            req.body['id_user'] = id_user;
            const path_image_user = path.join(__dirname + '/../public/img/profile_images/' + id_user);
            if(!fs.existsSync(path_image_user)) {
                fs.mkdirSync(path_image_user);
            }
            callback(null, path_image_user);
        }
        
    },

    filename: (req, file, callback) => {
        // Verificamos si los archivos a subir son parte del modelo de productos
        if((file.fieldname == "imagenesComplementarias") || file.fieldname == "main_image") {
            if(file.fieldname == "main_image") {
                callback(null, `main_image${path.extname(file.originalname)}`);
            }
            else {
                callback(null, `image_comple_${file.originalname}`);
            }
        }
        else {
            const id_user = req.body.id_user;
            callback(null, `perfil_${id_user}`);
        }
    }
});

const upload = multer({ storage });
// Routes
router.get('/', mainController.home);

router.get('/login', mainController.login);
router.post('/login', mainController.processLogin);

router.get('/register', mainController.register);
router.post('/register', upload.fields([ { name: 'avatar', maxCount: 1 } ]), validarRegistroUsuario, mainController.registerCreateUser)
router.get('/profile/:idUsuario', mainController.profile);

router.get('/shoppingCar', mainController.shoppingCar);

router.get('/products', mainController.searchProduct);
router.get('/detailproduct/:id', mainController.detailproduct);

// Routes of products CRUD
router.get('/products/create', mainController.createProduct);
router.post('/products/createnew',
    generaID,
    upload.fields([
        {
            name: 'imagenesComplementarias',
            maxCount: 3
        },
        {
            name: 'main_image',
            maxCount: 1
        }
    ]),
    mainController.createNewProduct);
router.get('/products/:id/edit', mainController.editProduct);
router.put('/products/:id', mainController.updateProduct);
router.delete('/products/:id', mainController.deleteProduct);


router.get('/test', mainController.test);
module.exports = router;