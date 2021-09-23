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
    
    shoppingCar: (req, res) => {
        return res.render('shoppingcar');
    },
    
    detailproduct: (req, res) => {
        return res.render('detalleproducto')
    },

    searchProduct: (req, res) => {
        return res.render('busqueda-producto');
    },

    // CRUD - Products

    // Obtener formulario para editar un producto
    editProduct: (req, res) => {
        return res.render('editar-producto', { editando: true });
        //
    },

    // Actualizar DB de productos
    updateProduct: (req, res) => {
        //
        products.actualizarListaProductos(id);
        saveDBProducts(products.listadoProductosArr);
    },

    // Eliminar producto de la DB
    deleteProduct: (req, res) => {
        //
        products.eliminarProductoDeLaLista(id);
        //Salvamos la DB
        saveDBProducts(products.listadoProductosArr);
    }


    
};

module.exports = controller;