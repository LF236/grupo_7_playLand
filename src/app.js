const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Route public
const public_path = path.resolve(__dirname + '/public');
app.use(express.static(public_path));

// Procces data of forms 
app.use(express.urlencoded( {extended: false} ));
app.use(express.json());

// Config of override for the methods PUT and DELETE
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Configure routes
const mainRoutes = require('./routes/mainRoutes.js');
app.use('/', mainRoutes);

// Set view template
app.set('view engine', 'ejs');

// 404 Error Define
app.use((req, res, next) => {
    res.status(404).render('not-found');
});

//Listening Server
app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});