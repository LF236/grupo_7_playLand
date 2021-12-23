require('colors');
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const port = 3000;

// Configuracion para el uso de sesion
const session = require('express-session');
app.use(session({ secret: 'play_land' }));
// Route public
const public_path = path.resolve(__dirname + '/public');
app.use(express.static(public_path));

// Seteamos el uso de cookies en el proyecto
app.use(cookieParser());
// Procces data of forms 
app.use(express.urlencoded( {extended: false} ));
app.use(express.json());

// Config of override for the methods PUT and DELETE
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Verificammos si no hay una cookie de sesión activa (El usuario dio clic en 'Recuerdame')
app.use((req, res, next) => {
    /* 
        Si hay una cookie de sesión activa, creamos la variable de
        sesión idUsuario con el valor de la cookie, así los controladores
        sabrán que hay una sesión activa y podran trabajar de manera
        correcta
    */
    if(req.cookies.idUsuario) {
        //console.log('Hay una cookie de sesión activa'.rainbow);
        req.session.idUsuario = req.cookies.idUsuario;
    }
    next();
})

// Configure routes
const mainRoutes = require('./routes/mainRoutes.js');
app.use('/', mainRoutes);

// Set view template
app.set('view engine', 'ejs');


// 404 Error Define
app.use((req, res, next) => {
    res.status(404).render('not-found', {
        "nombreUsuario": null,
        "messageError": "Lo sentimos, no se pudo encontrar la página que estás buscando",
        "messageLink": "Regresar a la página principal",
        "url": "/"
    });
});

//Listening Server
app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`.blue);
});