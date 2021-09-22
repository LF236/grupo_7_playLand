const Productos = require('../models/Productos');

let productos = new Productos();

productos.crearProducto("XboxI", "./ruta/imagenMain", "./ruta/imagenI", "./ruta/imagenII", "./ruta/imagenIII", "$250", ["Peliculas", "Juegos"], "4.5", "Consola Interactiva", "2");
productos.crearProducto("PlayV", "./ruta/imagenMain", "./ruta/imagenI", "./ruta/imagenII", "./ruta/imagenIII", "$42342", ["Gaming", "Juegos"], "5", "Consola Interactiva de Sony", "1");

console.log(productos._listadoProductos);