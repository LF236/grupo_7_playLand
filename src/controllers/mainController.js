const home_products = [
    {
        img: '/img/home_images/recommendations_img_freedi.jpeg',
        name: 'Freddy Funk Pop',
        price: 20.00,
        tags: ['new']
    },
    {
        img: '/img/home_images/recommendations_img_ironHead.jpg',
        name: 'Iron Man Head',
        price: 50.00,
        tags: ['new']
    },
    {
        img: '/img/home_images/recommendations_img_marioBox.jpg',
        name: 'Super Mario Checkers',
        price: 20.00,
        tags: ['new']
    },
    {
        img: '/img/home_images/recommendations_img_jumangi.jpg',
        name: 'Jumangi Game',
        price: 60.00,
        tags: ['new']
    },
    {
        img: '/img/home_images/recommendations_img_stranger.jpg',
        name: 'Stranger Things Game',
        price: 80.00,
        tags: ['new']
    },
    {
        img: '/img/home_images/recommendations_img_clmentoni.jpg',
        name: 'Clementoni',
        price: 20.00,
        tags: ['new']
    },
    {
        img: '/img/home_images/recommendations_img_trones.jpg',
        name: 'Game Of Thrones Game',
        price: 30.00,
        tags: ['new']
    },
    {
        img: '/img/home_images/recommendations_img_belfort.jpg',
        name: 'Belfort Game',
        price: 15.00,
        tags: 'new'
    },
    {
        img: '/img/home_images/recommendations_img_chest.jpg',
        name: 'Chest Metalic',
        price: 18.00,
        tags: ['new']
    },
    {
        img: '/img/home_images/star-wars-revelion.jpg',
        name: 'Revelion',
        price: 20.00,
        tags: ['dark-side']
    },
    {
        img: '/img/home_images/star-wars-carritos.jpg',
        name: 'Cars',
        price: 15.00,
        tags: ['dark-side']
    },
    {
        img: '/img/home_images/star-wars-imperial.jpg',
        name: 'Imperial',
        price: 30.00,
        tags: ['dark-side']
    }
];

const controller = {
    home: (req, res) => {
        return res.render('home', { home_products });
    },
    
    login: (req, res) => {
        return res.render('login');
    },
    
    register: (req, res) => {
        return res.render('registro');
    },
    
    shoppingCar: (req, res) => {
        return res.render('shoppingcar');
    },
    
    detailproduct: (req, res) => {
        return res.render('detalleproducto')
    },

    editProduct: (req, res) => {
        return res.render('editar-producto', { editando: true });
        //
    },

    searchProduct: (req, res) => {
        return res.render('busqueda-producto');
    }
};

module.exports = controller;