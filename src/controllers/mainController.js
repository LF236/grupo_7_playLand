require('colors');
const Productos = require("../models/Productos");
const path = require('path');
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
            if (usuarioBandera.password == password) {
                console.log('ENTRASTE');
                //console.log(usuarioBandera.id);
                req.session.idUsuario = usuarioBandera.id;
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
                    }
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
                }
            })
        }
    },

    register: (req, res) => {
        // Verificamos que no haya una sesión activa, para no mandar el nombre del usuario a la vista
        if (req.session.idUsuario == undefined) {
            return res.render('registro', {
                "nombreUsuario": null,
            });
        }
        // Si hay una sesión activa, obviamente el proceso de registro queda descartado y mandamos un error
        return res.send('Hay una sesión activa, no puedes registrar un usuario nuevo')
    },

    registerCreateUser: (req, res) => {
        const nameAvatar = req.files.avatar[0].filename;
        let usuario_auxiliar = {
            id: req.body.id_user,
            nombre: req.body.firstName,
            apellidos: req.body.lastName,
            email: req.body.email,
            password: req.body.loginPassword,
            imagen_perfil: `/img/profile_images/${req.body.id_user}/${nameAvatar}`,
            editor: false
        }
        let userData = getDataUsersJSON();
        userData.push(usuario_auxiliar);
        saveDBUsers(userData);
        res.render('mensaje-usuario-registrado', {
            'email': usuario_auxiliar.email
        })
    },

    // Método para mostrar el perfil del usuario
    profile: (req, res) => {
        // Si la sesión no se encuentra activa el usuario no tiene permisos para poder entrar
        if (req.session.idUsuario == undefined) {
            res.send('NO PUEDES ENTRAR A ESTE SITION');
        }
        // Si si hay una sesión, obtenemos el ID que se manda a través de la URL
        const { idUsuario } = req.params;
        // Buscamos toda la información del usuario a través del ID
        const usuarioBandera = getDataUserById(req.session.idUsuario);
        /* 
            Rendereizamos la vista correspondiente, añadiendo el obteto infoPerfilUsuario 
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

    // Vista al dar clic en el producto y cargar su data ---> LISTO
    detailproduct: (req, res) => {
        const idProducto = req.params.id;
        let detProduct = null;
        products.listadoProductosArr.forEach(product => {
            if (product.id == idProducto) {
                detProduct = product;
            }
        })
        return res.render('detalleproducto', { detProduct })
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
            return res.render('busqueda-producto', { auxProducts, patronBusqueda });
        }
        auxProducts = products.listadoProductosArr;
        return res.render('busqueda-producto', { auxProducts, patronBusqueda: "Todos los productos" });
    },

    // CRUD - Products

    // Obtener formulario para editar un producto ---> LISTO
    editProduct: (req, res) => {
        const idProduct = req.params.id;
        let auxProduct = null;
        products.listadoProductosArr.forEach(product => {
            if (product.id == idProduct) {
                auxProduct = product;
            }
        })
        return res.render('editar-producto', { auxProduct });
        //
    },

    //Formulario para CREAR un producto ---> PENDIENTE
    createProduct: (req, res) => {
        return res.render('crear-producto');
    },

    createNewProduct: (req, res) => {
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
    },

    // Actualizar DB de productos ---> LISTO
    updateProduct: (req, res) => {
        //

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

    // Eliminar producto de la DB --->PENDIENTE
    deleteProduct: (req, res) => {
        // Obtenemos el id
        const id = req.params.id;
        products.eliminarProductoDeLaLista(id);
        //Salvamos la DB
        saveDBProducts(products.listadoProductosArr);
        res.render('deleted-product');
    },

    test: (req, res) => {
        res.render('mensaje-usuario-registrado', {
            'email': 'correoFernanoPrueba@gmail.com'
        })
    }

};

module.exports = controller;