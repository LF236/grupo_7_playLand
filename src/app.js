const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

//Route public
const public_path = path.resolve(__dirname + '/public');
app.use(express.static(public_path));

//Routes
app.get('/', (req, res) => {
    const routeHome = path.resolve(__dirname + '/views/home.html');
    res.sendFile(routeHome);
});

app.get('/login', (req, res) => {
    const routeLogin = path.resolve(__dirname + '/views/login.html');
    res.sendFile(routeLogin);
});

app.get('/register', (req, res) => {
    const routeRegister = path.resolve(__dirname + '/views/registro.html');
    res.sendFile(routeRegister);
});

app.get('/shoppingCar', (req, res) => {
    const routeShoppingCar = path.resolve(__dirname + '/views/shoppingcar.html');
    res.sendFile(routeShoppingCar);
});

app.get('/detailproduct', (req, res) => {
    const routeDetailProduct = path.resolve(__dirname + '/views/detalleproducto.html');
    res.sendFile(routeDetailProduct);
})

//Listening Server
app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});