const Productos = require("../models/Productos");
const path = require('path');
const { getDataProductsJSON, saveDBProducts, getDataUsersJSON, saveDBUsers } = require("../helpers/interaccionDB");

const products = new Productos();
const dataProducts = getDataProductsJSON();

if (dataProducts) {
    products.cargarProductosDesdeArray(dataProducts);
}

const controller = {
    home: (req, res) => {
        //return res.render('home', { home_products });
        return res.render('home', { productsArr: products.listadoProductosArr });
    },

    login: (req, res) => {
        return res.render('login');
    },

    register: (req, res) => {
        return res.render('registro');
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
        //console.log(userData);
        //saveDBUsers();
        //console.log(usuario_auxiliar);
        saveDBUsers(userData);
        res.render('mensaje-usuario-registrado', {
            'email': usuario_auxiliar.email
        })
    },

    profile: (req, res) => {
        return res.render('profile');
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
            arrRoutesImagenesComplementarias[i]= `${imgComplementaria.path}`.replace(route_delete_string, '');
        });
        const allProduct = products.crearProducto(id_product,req.body.nombre_producto, main_img_route, arrRoutesImagenesComplementarias[0],arrRoutesImagenesComplementarias[1],arrRoutesImagenesComplementarias[2], req.body.precio, req.body.categoria, "", req.body.description, req.body.players);
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