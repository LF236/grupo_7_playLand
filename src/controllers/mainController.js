const Productos = require("../models/Productos");
const { getDataProductsJSON, saveDBProducts, getDataUsersJSON, saveDBUsers } = require("../helpers/interaccionDB");

const products = new Productos();
const dataProducts = getDataProductsJSON();
if(dataProducts) {
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

    // Inciar con la carga del shopping car --->PENDIENTE
    shoppingCar: (req, res) => {
        return res.render('shoppingcar');
    },
    
    // Vista al dar clic en el producto y cargar su data ---> LISTO
    detailproduct: (req, res) => {
        const idProducto = req.params.id;
        let detProduct = null;
        products.listadoProductosArr.forEach(product => {
            if(product.id == idProducto) {
                detProduct = product;
            }
        })
        return res.render('detalleproducto', {detProduct})
    },

    // Vista de busqueda de productos a parte de la barra de busqueda --->PENDIENTE
    searchProduct: (req, res) => {
        const patronBusqueda = req.query.search;
        const auxProducts = [];
        products.listadoProductosArr.forEach(producto => {
            if(producto.nombre_producto.includes(patronBusqueda)) {
                auxProducts.push(producto);
            }
            if (producto.categoria.includes(patronBusqueda)){
                auxProducts.push(producto);
            }
        })
        return res.render('busqueda-producto', {auxProducts, patronBusqueda});
        
    },

    // CRUD - Products

    // Obtener formulario para editar un producto ---> LISTO
    editProduct: (req, res) => {
        const idProduct = req.params.id;
        let auxProduct = null;
        products.listadoProductosArr.forEach(product => {
            if(product.id == idProduct) {
                auxProduct = product;
            }
        })
        return res.render('editar-producto', { auxProduct });
        //
    },

    // Actualizar DB de productos ---> LISTO
    updateProduct: (req, res) => {
        //

        let nuevoProductoActualizado = {
            nombre_producto : req.body.namePro,
            id : req.params.id,
            main_image : "",
            detail_image_1 : "",
            detail_image_2 : "",
            detail_image_3 : "",
            precio : req.body.precio,
            categoria : req.body.categoriaProducto,
            description : req.body.descripcionProducto,
            players : req.body.numeroJugadores,
        }

        //console.log(nuevoProductoActualizado);
        if(products.actualizarListaProductos(nuevoProductoActualizado)) {
            res.redirect(`/detailproduct/${req.params.id}`);
        }
        
        saveDBProducts(products.listadoProductosArr);
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
    }
    
};

module.exports = controller;