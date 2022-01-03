require('colors');
const { v4: uuid } = require('uuid');
const Productos = require("../models/Productos");
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const { getDataProductsJSON, saveDBProducts, getDataUsersJSON, saveDBUsers } = require("../helpers/interaccionDB");
const getDataUserById = require('../helpers/getDataUserById');
const products = new Productos();
const dataProducts = getDataProductsJSON();
const db = require('../database/models');
const Sequelize = require('sequelize');
const op = Sequelize.Op;
if (dataProducts) {
    products.cargarProductosDesdeArray(dataProducts);
}

const controller = {
    // Mostramos la página principal del sitio
    home: async (req, res) => {
        console.log(req.session.idUsuario);
        // Buscamos la data en la base
        let productsArr = await db.Product.findAll({
            raw: true,
            limit: 6
        });
        let productsStarWars = await db.Product.findAll({
            raw: true,
            where: {
                name: {
                    [op.like]: `%star%`
                }
            }
        })
        if (req.session.idUsuario == undefined) {
            return res.render('home', {
                productsArr: productsArr,
                productsStarWars: productsStarWars,
                "nombreUsuario": null,
            });
        }
        // Si ya esta iniciada la sesión, buscar la información
        let usuarioBandera = await db.User.findByPk(req.session.idUsuario, {
            raw: true
        });
        console.log(usuarioBandera);
        // Renderizamos con la sesión del usuario
        return res.render('home', {
            productsArr,
            productsStarWars,
            "nombreUsuario": usuarioBandera.name,
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
    processLogin: async (req, res) => {
        // Obtenemos el email y el password del formulario
        const { email, password } = req.body;
        // Obtenemos la lista de todos los usuarios, leyendo el archivo que por el momento usamos como base de datos
        let usuarioBandera = await db.User.findAll({
            raw: true,
            where: {
                email: email
            }
        });
        // Declaramos una bandera, para saber si el usuario ha sido encontrado o no
        /*
            Si el usuarioBandera en diferente a NULL, ahora comparamos el password del usuario encontrado en la DB
            con el password que nos pasaron en el formulario
        */
        if (usuarioBandera.length > 0) {
            usuarioBandera = usuarioBandera[0];
            console.log(usuarioBandera.password);
            if (bcryptjs.compareSync(password, usuarioBandera.password)) {
                console.log('ENTRASTE');
                //console.log(usuarioBandera.id);
                req.session.idUsuario = usuarioBandera.id;
                // Si el usuario activo la opción de recordar sesión, creamos una cookie
                if (req.body.keepSession) {
                    res.cookie("idUsuario", usuarioBandera.id, { maxAge: 60000 })
                }
                let productsArr = await db.Product.findAll({
                    raw: true,
                    limit: 6
                });
                let productsStarWars = await db.Product.findAll({
                    raw: true,
                    where: {
                        name: {
                            [op.like]: `%star%`
                        }
                    }
                })
                return res.render('home', {
                    productsArr: productsArr,
                    productsStarWars,
                    "nombreUsuario": usuarioBandera.name,
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
        // Si el usuarioBandera es un arreglo vacio
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

    register: async (req, res) => {
        // Verificamos que no haya una sesión activa, para no mandar el nombre del usuario a la vista
        if (req.session.idUsuario == undefined) {
            return res.render('registro', {
                "nombreUsuario": null,
                "primerError": null,
                "old": null
            });
        }
        // Si hay una sesión activa, obviamente el proceso de registro queda descartado y mandamos la vista de error
        let usuarioBandera = await db.User.findByPk(req.session.idUsuario, {
            raw: true
        });

        return res.render('not-found', {
            "nombreUsuario": usuarioBandera.name,
            "idUsuario": usuarioBandera.id,
            "messageError": "Ya hay una sesión activa",
            "messageLink": "Regresar a la página principal",
            "url": "/"
        })
    },

    registerCreateUser: async (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            // Creamos la estructura de un Usuario para la DB
            const nameAvatar = req.files.avatar[0].filename;
            const id = req.body.id_user;
            const email = req.body.email;
            const password = bcryptjs.hashSync(req.body.loginPassword, 12);
            const name = req.body.firstName;
            const last_name = req.body.lastName;
            const image = `/img/profile_images/${req.body.id_user}/${nameAvatar}`;

            // Guardamos el usuario dentro de la BD
            await db.User.create({
                id: id,
                email: email,
                password: password,
                name: name,
                last_name: last_name,
                image: image
            });

            return res.render('mensaje-usuario-registrado', {
                'email': req.body.email,
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
    profile: async (req, res) => {
        // Si la sesión no se encuentra activa el usuario no tiene permisos para poder entrar
        if (req.session.idUsuario == undefined) {
            return res.render('not-found', {
                "nombreUsuario": null,
                "messageError": "No hay una sesión activa, por favor inicie sesión",
                "messageLink": "Ir al Login",
                "url": "/login"
            })
        }
        // Buscamos toda la información del usuario a través del ID
        let usuarioBandera = await db.User.findByPk(req.session.idUsuario, {
            raw: true
        });
        /*
            Renderizamos la vista correspondiente, añadiendo el objeto infoPerfilUsuario
            a la estructura original
        */
        return res.render('profile', {
            "nombreUsuario": usuarioBandera.name,
            "idUsuario": "Hola",
            "infoPerfilUsuario": {
                'img': usuarioBandera.image,
                'email': usuarioBandera.email
            }
        })
    },

    // Inciar con la carga del shopping car --->PENDIENTE
    shoppingCar: (req, res) => {
        return res.render('shoppingcar');
    },

    // Vista al dar clic en el producto y cargar su data
    detailproduct: async (req, res) => {
        const idProducto = req.params.id;
        let detProduct = null;
        detProduct = await db.Product.findByPk(idProducto, {
            raw: true
        });

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
        let usuarioBandera = await db.User.findByPk(req.session.idUsuario, {
            raw: true
        });
        return res.render('detalleproducto', {
            detProduct,
            "nombreUsuario": usuarioBandera.name,
            "idUsuario": usuarioBandera.id
        })

    },

    // Vista de busqueda de productos a parte de la barra de busqueda --->PENDIENTE
    searchProduct: async (req, res) => {
        const patronBusqueda = req.query.search;
        let auxProducts = [];
        if (patronBusqueda) {
            auxProducts = await db.Product.findAll({
                raw: true,
                where: {
                    name: {
                        [op.like]: `%${patronBusqueda}%`
                    }
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
            let usuarioBandera = await db.User.findByPk(req.session.idUsuario, {
                raw: true
            });
            return res.render('busqueda-producto', {
                auxProducts,
                patronBusqueda,
                "nombreUsuario": usuarioBandera.name,
                "idUsuario": usuarioBandera.id
            });
        }
        // Verificamos si hay sesión antes de renderizar la vista
        auxProducts = await db.Product.findAll({
            raw: true,
        });

        if (req.session.idUsuario == undefined) {
            return res.render('busqueda-producto', {
                auxProducts,
                patronBusqueda: "Todos los productos",
                "nombreUsuario": null,
            });
        }
        // Si la sesión esta activa, buscamos la información del usuario actual y la mandamos a la vista
        let usuarioBandera = await db.User.findByPk(req.session.idUsuario, {
            raw: true
        });
        return res.render('busqueda-producto', {
            auxProducts,
            patronBusqueda: "Todos los productos",
            "nombreUsuario": usuarioBandera.name,
            "idUsuario": usuarioBandera.id
        });
    },

    // CRUD - Products

    // Obtener formulario para editar un producto ---> LISTO
    editProduct: async (req, res) => {
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
        auxProduct = await db.Product.findByPk(idProduct, {
            include: [
                {
                    association: "categorias"
                }
            ],
        });

        // Obtenemos la información del usuario activo actual
        let usuarioBandera = await db.User.findByPk(req.session.idUsuario, {
            raw: true
        });
        return res.render('editar-producto', {
            auxProduct,
            "nombreUsuario": usuarioBandera.name,
            "idUsuario": usuarioBandera.id
        });
        //
    },

    //Formulario para CREAR un producto
    createProduct: async (req, res) => {
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
        let usuarioBandera = await db.User.findByPk(req.session.idUsuario, {
            raw: true
        });
        return res.render('crear-producto', {
            "nombreUsuario": usuarioBandera.name,
            "idUsuario": usuarioBandera.id,
            "primerError": null,
            "old": null
        });
    },

    // Creamos un nuevo producto POST
    createNewProduct: async (req, res) => {
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

            await db.Product.create({
                id: id_product,
                name: req.body.nombre_producto,
                price: req.body.precio,
                description: req.body.description,
                image: main_img_route,
                descImgI: arrRoutesImagenesComplementarias[0],
                descImgII: arrRoutesImagenesComplementarias[1],
                descImgIII: arrRoutesImagenesComplementarias[2],
                idCategory: "",
                players: req.body.players,
                rating: 0
            });
            console.log(req.body);
            // Almacenamos las relaciones entre el producto y sus diferentes categorias
            const categoriasDb = await db.Category.findAll({
                raw: true
            });
            let categoriasIdReq = [];
            let promesasUpdateCategories = [];
            // Verificamos que la variable dentro del request exista
            if (req.body.categoria != undefined) {
                console.log(typeof (req.body.categoria));
                // Si se recibe una sola categoria se hace una sola promesa (agregamos al arreglo)

                // if(typeof(req.body.categoria) === "string") {
                //     console.log("agregamos un solo elemeto");
                //     categoriasDb.forEach(categoriaDb => {
                //         if (req.body.categoria.includes(categoriaDb.name)) {
                //             categoriasIdReq.push(categoriaDb.id);
                //         }
                //     });
                //     console.log(categoriasIdReq);
                //     // promesasUpdateCategories.push(
                //     //     db.Product_Categories.create({

                //     //     })
                //     // );
                // }

                categoriasDb.forEach(categoriaDb => {
                    if (req.body.categoria.includes(categoriaDb.name)) {
                        categoriasIdReq.push(categoriaDb.id);
                    }
                });

                categoriasIdReq.forEach(categoriaIdReq => {
                    console.log(categoriaIdReq);
                    promesasUpdateCategories.push(
                        db.Product_Categories.create({
                            id: uuid(),
                            product_id: id_product,
                            category_id: categoriaIdReq
                        })
                    );
                })

                // Ejecutamos el arreglo de promesas
                Promise.all(promesasUpdateCategories)
                    .then(resultado => {
                        return res.redirect(`/detailproduct/${id_product}`);
                    })
                // req.body.categoria.forEach(nombreCategoriaReq => {
                //     console.log(nombreCategoriaReq);
                // })
                //return res.redirect(`/detailproduct/${id_product}`);
                //return res.send('AYUWOKI');
            }

        } else {
            //console.log(errors.mapped());
            const primerError = errors.mapped()[`${Object.entries(errors.mapped())[0][0]}`];
            const usuarioBandera = getDataUserById(req.session.idUsuario);
            return res.render('crear-producto', {
                "nombreUsuario": usuarioBandera.nombre,
                "idUsuario": usuarioBandera.id,
                "primerError": primerError,
                "old": req.body
            });
        }
    },

    // Actualizar DB de productos PUT
    updateProduct: async (req, res) => {
        const id = req.params.id;
        const name = req.body.namePro;
        const price = req.body.precio;
        const description = req.body.descripcionProducto;
        // IMAGENES QUE NO HEMOS PROCESADO....
        const players = req.body.numeroJugadores;
        const categoriasReq = req.body.categoriaProducto;
        let categoriasIdReq = [];
        console.log(req.body);
        // Obtenemos al lista de categorias de la base
        const categoriasDb = await db.Category.findAll({
            raw: true
        });

        console.log(categoriasDb);
        console.log(categoriasReq);
        if (categoriasReq != undefined) {
            categoriasDb.forEach(categoriaDb => {
                if (categoriasReq.includes(categoriaDb.name)) {
                    categoriasIdReq.push(categoriaDb.id);
                }
            });
        }


        // Eliminamos todas las relaciones entre el producto y su categoria de la tabla "Product_categories"
        await db.Product_Categories.destroy({
            where: {
                product_id: id
            }
        });

        // Actualizamos la información del producto en la tabla "Products"
        await db.Product.update(
            {
                name: name,
                price: price,
                description: description,
                players: players
            },
            {
                where: { id: id }
            }
        );

        // Agregamos las nuevas relaciones entre el producto y sus categorias
        let promesasUpdateCategories = [];

        categoriasIdReq.forEach(categoriaIdReq => {
            promesasUpdateCategories.push(
                db.Product_Categories.create({
                    id: uuid(),
                    product_id: id,
                    category_id: categoriaIdReq
                })
            );
        });

        Promise.all(promesasUpdateCategories)
            .then(resultado => {
                console.log(req.body);
                return res.redirect(`/detailproduct/${req.params.id}`);
            })
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

    test: async (req, res) => {
        const categoriasReq = ['anime', 'series'];
        let categoriasIdReq = [];
        const categoriasDb = await db.Category.findAll({
            raw: true
        })
        categoriasDb.forEach(categoriaDb => {
            if (categoriasReq.includes(categoriaDb.name)) {
                categoriasIdReq.push(categoriaDb.id);
            }

        });
        console.log(categoriasIdReq);
        res.send(categoriasDb);
    }

};

module.exports = controller;