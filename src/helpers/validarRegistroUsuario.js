const { body, check } = require('express-validator');

const validarRegistroUsuario = [
    check('firstName')
        .notEmpty().withMessage('Debes completar el nombre').bail()
        .isLength({ min: 2 }).withMessage('El nombre debe ser más largo'),
    check('lastName')
        .notEmpty().withMessage('Debes complear el apellido').bail()
        .isLength({ min: 2 }).withMessage('El apellido debe ser más largo'),
    check('email')
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Debes completar un email valido'),
    check('emailConfirm')
        .notEmpty().withMessage('Debes completar la verificación del email').bail()
        .isEmail().withMessage('Debes completar un email valido').bail()
        .custom((value, { req }) => value == req.body.email).withMessage('Debe coincidir con el mail'),
    check('loginPassword')
        .notEmpty().withMessage('Debes completar la contraseña'),
    check('loginPasswordConfirm')
        .notEmpty().withMessage('Debes completar la verificación de contraseña').bail()
        .custom((value, { req }) => value == req.body.loginPassword).withMessage('Las contraseñas deben coincidir'),
    check('avatar')
        .custom((value, { req }) => req.files.avatar ? true : false).withMessage('Debes seleccionar una imagen')
];

const validarCreacionProducto = [
    check('nombre_producto')
        .notEmpty().withMessage('Debes introducir un nombre para el producto').bail()
        .isLength({ min: 2 }).withMessage('El nombre del producto debe ser más largo'),
    check('description')
        .notEmpty().withMessage('Debes agregar una descripción').bail()
        .isLength({ min: 5 }).withMessage('La descripción debe ser más grande'),
    check('players')
        .notEmpty().withMessage('Debes agregar el número de jugadores').bail()
        .isInt({ min: 1 }).withMessage('El número mínimo de jugadores es 1'),
    check('precio')
        .notEmpty().withMessage('Debes agregar un precio al producto').bail()
        .isInt({ min: 1 }).withMessage('El precio del producto debe ser mayor a 0'),
    check('categoria')
        .notEmpty().withMessage('Debes seleccionar al menos una categoria'),
    check('main_image')
        .custom((value, { req }) => req.files.main_image ? true : false).withMessage('Debes agregar la imágen principal'),
    check('imagenesComplementarias')
        .custom((value, { req }) => req.files.imagenesComplementarias ? true: false).withMessage('Debes agregar al menos una imágen complementaria')
];

module.exports = {
    validarRegistroUsuario,
    validarCreacionProducto
}