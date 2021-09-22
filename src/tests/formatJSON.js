// Acomodar el JSON 
const { getDataProductsJSON, saveDBProducts } = require('../helpers/interaccionDB');
const { v4: uuid } = require('uuid');
const data = getDataProductsJSON();

let aux = [];
data.forEach(producto => {
    // Generando ID random
    let idRandom = uuid();
    producto.id = idRandom;

    // Formato al precio para que sea un entero
    let precioInt =  producto.precio.replace('$', '');
    precioInt = parseInt(precioInt);
    producto.precio = precioInt;
    
    // Formato al rating para que sea un float
    let ratingFloat = parseFloat(producto.rating);
    producto.rating = ratingFloat;
    
    // Apilamos el objeto creado al arreglo que almacenaremos en el .json
    aux.push(producto);
});

// Guardamos la varible en el archivo .json
saveDBProducts(aux);
