const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Route public
const public_path = path.resolve(__dirname + '/public');
app.use(express.static(public_path));

// File of we routes
const mainRoutes = require('./routes/mainRoutes.js');

// View Template
app.set('view engine', 'ejs');

// Set mainRoutes with file of routes
app.use('/', mainRoutes);

// 404 Error Define
app.use((req, res, next) => {
    res.status(404).render('not-found');
});

//Listening Server
app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});