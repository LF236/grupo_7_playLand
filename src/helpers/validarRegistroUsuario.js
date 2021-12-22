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

module.exports = {
    validarRegistroUsuario
}