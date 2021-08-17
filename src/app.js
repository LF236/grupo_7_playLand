const express = require('express');
const app = express();
const port = 3030;

//Rutas
app.get('/', (req, res) => {
    res.send('Hello World');
});

//Servidor en escucha
app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});