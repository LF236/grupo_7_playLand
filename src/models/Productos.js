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
    actualizarListaProductos(productoActualizado) {
        /* 
            Actualizamos el producto que concida con el ID, con el producto que pasamos como parametro (el del formulario) en los controladores
        */
        console.log(productoActualizado);
        // Buscamos el producto que coincida con el ID
        const productoActual = this._listadoProductos[productoActualizado.id];
        if (productoActual) {
            //Actualizamos los cambios del objeto que tengla la CLAVE igual al ID del producto a actualiza
            productoActual.nombre_producto = productoActualizado.nombre_producto;
            /*
                Verificamos imagen por imagen del producto actualizado para ver si se subio una nueva
                imagen, si es asi, la imagen del producto actual la cambiamos por la del actualizado
            */
            if (productoActualizado.main_image.length > 0) {
                productoActual.main_image = productoActualizado.main_image;
            }

            if (productoActualizado.detail_image_1.length > 0) {
                productoActual.detail_image_1 = productoActualizado.detail_image_1;
            }

            if (productoActualizado.detail_image_2.length > 0) {
                productoActual.detail_image_2 = productoActualizado.detail_image_2;
            }
            productoActual.precio = productoActualizado.precio;
            productoActual.categoria = productoActualizado.categoria;
            productoActual.description = productoActualizado.description;
            productoActual.players = productoActualizado.players;

            return true;
        } else {
            return null;
        }
    }

    eliminarProductoDeLaLista(id) {
        //CODIGO

    }
}

module.exports = Productos;