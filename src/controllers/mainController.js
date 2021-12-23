require('colors');
const Productos = require("../models/Productos");
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const { getDataProductsJSON, saveDBProducts, getDataUsersJSON, saveDBUsers } = require("../helpers/interaccionDB");
const getDataUserById = require('../helpers/getDataUserById');
const products = new Productos();
const dataProducts = getDataProductsJSON();

if (dataProducts) {
    products.cargarProductosDesdeArray(dataProducts);
}

const controller = {
    // Mostramos la página principal del sitio
    home: (req, res) => {
        console.log(req.session.idUsuario);
        if (req.session.idUsuario == undefined) {
            return res.render('home', {
                productsArr: products.listadoProductosArr,
                "nombreUsuario": null,
            });
        }
        // Si ya esta iniciada la sesión, buscar la información
        const usuarioBandera = getDataUserById(req.session.idUsuario);
        console.log(usuarioBandera);
        // Renderizamos con la sesión del usuario
        return res.render('home', {
            productsArr: products.listadoProductosArr,
            "nombreUsuario": usuarioBandera.nombre,
            "idUsuario": usuarioBandera.id
        })

    },

    // Mostramos la página del Login
    login: (req, res) => {
        if (req.session.idUsuario == undefined) {
            return res.render('login', {
                "errorMessage": null,
                "dataRecibida": null,
                "nombreUsuario": null,
            });
        }
    },

    // Método para procesar el Login
    processLogin: (req, res) => {
        // Obtenemos el email y el password del formulario     
        const { email, password } = req.body;
        // Obtenemos la lista de todos los usuarios, leyendo el archivo que por el momento usamos como base de datos
        const usuarios = getDataUsersJSON();
        // Declaramos una bandera, para saber si el usuario ha sido encontrado o no
        /* 
            Recorremos el arreglo, buscando al usuario en base al email del formulario, si se encuentra 
            rompemos el ciclo
        */
        let usuarioBandera = null;
        for (let usuario of usuarios) {
            if (usuario.email == email) {
                usuarioBandera = usuario;
                break;
            }
        }
        /*
            Si el usuarioBandera en diferente a NULL, ahora comparamos el password del usuario encontrado en la DB
            con el password que nos pasaron en el formulario
        */
        if (usuarioBandera) {
            console.log(usuarioBandera.password);
            if (bcryptjs.compareSync(password, usuarioBandera.password)) {
                console.log('ENTRASTE');
                //console.log(usuarioBandera.id);
                req.session.idUsuario = usuarioBandera.id;
                // Si el usuario activo la opción de recordar sesión, creamos una cookie
                if (req.body.keepSession) {
                    res.cookie("idUsuario", usuarioBandera.id, { maxAge: 60000 })
                }
                return res.render('home', {
                    productsArr: products.listadoProductosArr,
                    "nombreUsuario": usuarioBandera.nombre,
                    "idUsuario": usuarioBandera.id
                });
            }
            else {
                console.log('PASSWORD INVALIDO');
                res.render('login', {
                    "errorMessage": 'Password Invalido',
                    "dataRecibida": {
                        email,
                        password
                    },
                    "nombreUsuario": null,
                })
            }
        }
        // Si el usuarioBandera es NULL quiere decir que el correo no se encontro en la base de datos
        else {
            res.render('login', {
                "errorMessage": 'Correo Electronico No Registrado',
                "dataRecibida": {
                    email,
                    password
                },
                "nombreUsuario": null
            })
        }
    },

    register: (req, res) => {
        // Verificamos que no haya una sesión activa, para no mandar el nombre del usuario a la vista
        if (req.session.idUsuario == undefined) {
            return res.render('registro', {
                "nombreUsuario": null,
                "primerError": null,
                "old": null
            });
        }
        // Si hay una sesión activa, obviamente el proceso de registro queda descartado y mandamos la vista de error
        const usuarioBandera = getDataUserById(req.session.idUsuario);
        return res.render('not-found', {
            "nombreUsuario": usuarioBandera.nombre,
            "idUsuario": usuarioBandera.id,
            "messageError": "Ya hay una sesión activa",
            "messageLink": "Regresar a la página principal",
            "url": "/"
        })
    },

    registerCreateUser: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            //console.log('ENTRO')
            const nameAvatar = req.files.avatar[0].filename;
            let usuario_auxiliar = {
                id: req.body.id_user,
                nombre: req.body.firstName,
                apellidos: req.body.lastName,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.loginPassword, 12),
                imagen_perfil: `/img/profile_images/${req.body.id_user}/${nameAvatar}`,
                editor: false
            }
            let userData = getDataUsersJSON();
            userData.push(usuario_auxiliar);
            saveDBUsers(userData);
            return res.render('mensaje-usuario-registrado', {
                'email': usuario_auxiliar.email,
                'nombreUsuario': null
            })
        }
        const primerError = errors.mapped()[`${Object.entries(errors.mapped())[0][0]}`];
        return res.render('registro', {
            "nombreUsuario": null,
            "primerError": primerError,
            "old": req.body
        });
    },

    // Método para mostrar el perfil del usuario
    profile: (req, res) => {
        // Si la sesión no se encuentra activa el usuario no tiene permisos para poder entrar
        if (req.session.idUsuario == undefined) {
            return res.render('not-found', {
                "nombreUsuario": null,
                "messageError": "No hay una sesión activa, por favor inicie sesión",
                "messageLink": "Ir al Login",
                "url": "/login"
            })
        }
        // Si si hay una sesión, obtenemos el ID que se manda a través de la URL
        const { idUsuario } = req.params;
        // Buscamos toda la información del usuario a través del ID
        const usuarioBandera = getDataUserById(req.session.idUsuario);
        /* 
            Renderizamos la vista correspondiente, añadiendo el objeto infoPerfilUsuario 
            a la estructura original
        */
        return res.render('profile', {
            "nombreUsuario": usuarioBandera.nombre,
            "idUsuario": "Hola",
            "infoPerfilUsuario": {
                'img': usuarioBandera.imagen_perfil,
                'email': usuarioBandera.email
            }
        })
    },


    // Inciar con la carga del shopping car --->PENDIENTE
    shoppingCar: (req, res) => {
        return res.render('shoppingcar');
    },

    // Vista al dar clic en el producto y cargar su data
    detailproduct: (req, res) => {
        const idProducto = req.params.id;
        let detProduct = null;
        products.listadoProductosArr.forEach(product => {
            if (product.id == idProducto) {
                detProduct = product;
            }
        })

        /* 
            Verificamos si no hay una sesión activa, si no hay renderizamos la vista de manera normal
            pasando el nombreUsuario con el valor de null
        */
        if (req.session.idUsuario == undefined) {
            return res.render('detalleproducto', {
                detProduct,
                'nombreUsuario': null
            })
        }
        // Si la sesión esta activa, buscamos la información del usuario y la mandamos al hacer el render
        const usuarioBandera = getDataUserById(req.session.idUsuario);
        return res.render('detalleproducto', {
            detProduct,
            "nombreUsuario": usuarioBandera.nombre,
            "idUsuario": usuarioBandera.id
        })

    },

    // Vista de busqueda de productos a parte de la barra de busqueda --->PENDIENTE
    searchProduct: (req, res) => {
        const patronBusqueda = req.query.search;
        let auxProducts = [];
        if (patronBusqueda) {
            products.listadoProductosArr.forEach(producto => {
                if (producto.nombre_producto.includes(patronBusqueda)) {
                    auxProducts.push(producto);
                }
                if (producto.categoria.includes(patronBusqueda)) {
                    auxProducts.push(producto);
                }
            })
            // Verificamos si hay sesión antes de renderizar la vista
            if (req.session.idUsuario == undefined) {
                return res.render('busqueda-producto', {
                    auxProducts,
                    patronBusqueda,
                    "nombreUsuario": null,
                });
            }
            // Si la sesión esta activa, hacemos la busqueda del usuario correspondiente
            const usuarioBandera = getDataUserById(req.session.idUsuario);
            return res.render('busqueda-producto', {
                auxProducts,
                patronBusqueda,
                "nombreUsuario": usuarioBandera.nombre,
                "idUsuario": usuarioBandera.id
            });
        }
        // Verificamos si hay sesión antes de renderizar la vista
        auxProducts = products.listadoProductosArr;
        if (req.session.idUsuario == undefined) {
            return res.render('busqueda-producto', {
                auxProducts,
                patronBusqueda: "Todos los productos",
                "nombreUsuario": null,
            });
        }
        // Si la sesión esta activa, buscamos la información del usuario actual y la mandamos a la vista
        const usuarioBandera = getDataUserById(req.session.idUsuario);
        return res.render('busqueda-producto', {
            auxProducts,
            patronBusqueda: "Todos los productos",
            "nombreUsuario": usuarioBandera.nombre,
            "idUsuario": usuarioBandera.id
        });
    },

    // CRUD - Products

    // Obtener formulario para editar un producto ---> LISTO
    editProduct: (req, res) => {
        // Verificamos que haya una sesión activa, si no la hay mandar mensaje de error
        if (req.session.idUsuario == undefined) {
            return res.render('not-found', {
                "nombreUsuario": null,
                "messageError": "No tienes permisos para estar aqui!",
                "messageLink": "Regresar a la página principal",
                "url": "/"
            })
        }
        const idProduct = req.params.id;
        let auxProduct = null;
        products.listadoProductosArr.forEach(product => {
            if (product.id == idProduct) {
                auxProduct = product;
            }
        })

        // Obtenemos la información del usuario activo actual
        const usuarioBandera = getDataUserById(req.session.idUsuario);
        return res.render('editar-producto', {
            auxProduct,
            "nombreUsuario": usuarioBandera.nombre,
            "idUsuario": usuarioBandera.id
        });
        //
    },

    //Formulario para CREAR un producto
    createProduct: (req, res) => {
        // Verificamos si hay una sesión activa, si no la hay mandar mensaje de NO permisos
        if (req.session.idUsuario == undefined) {
            return res.render('not-found', {
                "nombreUsuario": null,
                "messageError": "Si quiere agregar un producto para ser puesto a la venta por favor inicie sesión",
                "messageLink": "Ir al Login",
                "url": "/login"
            })
        }
        // Si ya esta iniciada la sesión, buscar la información
        const usuarioBandera = getDataUserById(req.session.idUsuario);
        return res.render('crear-producto', {
            "nombreUsuario": usuarioBandera.nombre,
            "idUsuario": usuarioBandera.id,
            "primerError": null,
            "old": null
        });
    },

    // Creamos un nuevo producto POST
    createNewProduct: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            // Almacenamos la ruta de la imagen principal
            const route_delete_string = path.join(__dirname + '/../public')
            let main_img_route = `${req.files.main_image[0].path}`.replace(route_delete_string, '');
            const id_product = req.id;
            // Recorremos el arreglo de imágenes secundarias y las asignamos a su respeciva variable
            const arrRoutesImagenesComplementarias = ["", "", ""];
            req.files.imagenesComplementarias.forEach((imgComplementaria, i) => {
                arrRoutesImagenesComplementarias[i] = `${imgComplementaria.path}`.replace(route_delete_string, '');
            });
            const allProduct = products.crearProducto(id_product, req.body.nombre_producto, main_img_route, arrRoutesImagenesComplementarias[0], arrRoutesImagenesComplementarias[1], arrRoutesImagenesComplementarias[2], req.body.precio, req.body.categoria, "", req.body.description, req.body.players);
            saveDBProducts(products.listadoProductosArr);
            return res.redirect(`/detailproduct/${allProduct.id}`);
        }

        //console.log(errors.mapped());
        const primerError = errors.mapped()[`${Object.entries(errors.mapped())[0][0]}`];
        const usuarioBandera = getDataUserById(req.session.idUsuario);
        return res.render('crear-producto', {
            "nombreUsuario": usuarioBandera.nombre,
            "idUsuario": usuarioBandera.id,
            "primerError": primerError,
            "old": req.body
        });
    },

    // Actualizar DB de productos PUT 
    updateProduct: (req, res) => {
        let nuevoProductoActualizado = {
            nombre_producto: req.body.namePro,
            id: req.params.id,
            main_image: "",
            detail_image_1: "",
            detail_image_2: "",
            detail_image_3: "",
            precio: req.body.precio,
            categoria: req.body.categoriaProducto,
            description: req.body.descripcionProducto,
            players: req.body.numeroJugadores,
        }

        //console.log(nuevoProductoActualizado);
        if (products.actualizarListaProductos(nuevoProductoActualizado)) {
            saveDBProducts(products.listadoProductosArr);
            return res.redirect(`/detailproduct/${req.params.id}`);
        }


        res.send('Fallo :c')
    },

    // Eliminar producto de la DB ---> REVISAR
    deleteProduct: (req, res) => {
        // Verificamos si la sesión esta activa, si no mandamos un error
        if (req.session.idUsuario == undefined) {
            return res.render('not-found', {
                "nombreUsuario": null,
                "messageError": "No tienes permisos para estar aqui!",
                "messageLink": "Regresar a la página principal",
                "url": "/"
            })
        }
        // Obtenemos el id
        const id = req.params.id;
        products.eliminarProductoDeLaLista(id);
        //Salvamos la DB
        saveDBProducts(products.listadoProductosArr);
        // Buscamos la información del usuario activo
        const usuarioBandera = getDataUserById(req.session.idUsuario);
        res.render('deleted-product', {
            "nombreUsuario": usuarioBandera.nombre,
            "idUsuario": usuarioBandera.id
        });
    },

    test: (req, res) => {
        res.render('mensaje-usuario-registrado', {
            'email': 'correoFernanoPrueba@gmail.com'
        })
    }

};

module.exports = controller;