const { v4: uuid } = require('uuid');
class Producto {
    nombre_producto = "";
    id = "";
    main_image = "";
    detail_image_1 = "";
    detail_image_2 = "";
    detail_image_3 = "";
    precio = "";
    categoria = [];
    rating = "";
    description = "";
    players = "";
    reviews = [];
    constructor(nombre_producto, main_image, detail_image_1, detail_image_2, detail_image_3, precio, categoria, rating, description, players) {
        this.id = uuid();
        this.nombre_producto = nombre_producto;
        this.main_image = main_image;
        this.detail_image_1 = detail_image_1;
        this.detail_image_2 = detail_image_2;
        this.detail_image_3 = detail_image_3;
        this.precio = precio;
        this.categoria = categoria;
        this.rating = rating;
        this.description = description;
        this.players = players;
        this.reviews = [];
    }
}

module.exports = Producto;