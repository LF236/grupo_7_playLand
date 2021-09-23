const Producto = require("./Producto");

class Productos {
    _listadoProductos = {};
    constructor() {
        this._listadoProductos = {};
    }
    
    get listadoProductosArr() {
        let arr = [];
        Object.keys(this._listadoProductos).forEach(key => {
            arr.push(this._listadoProductos[key]);
        });
        return arr;
    }

    crearProducto(nombre_producto, main_image, detail_image_1, detail_image_2, detail_image_3, precio, categoria, rating, description, players) {
        let producto = new Producto(nombre_producto, main_image, detail_image_1, detail_image_2, detail_image_3, precio, categoria, rating, description, players);
        this._listadoProductos[producto.id] = producto;
    }

    cargarProductosDesdeArray(lista_productos = []) {
        lista_productos.forEach(producto => {
            this._listadoProductos[producto.id] = producto;
        });
    }

    // CRUD 
    actualizarListaProductos(id) {
        //CODIGO
        
    }

    eliminarProductoDeLaLista(id) {
        //CODIGO
        
    }
}

module.exports = Productos;