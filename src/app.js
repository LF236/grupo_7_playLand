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

//Listening Server
app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});