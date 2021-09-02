const controller = {
    home: (req, res) => {
        return res.render('home');
    },
    /*
    login: (req, res) => {
        return res.send('login');
    },
    
    register: (req, res) => {
        return res.send('registro');
    },
    
    shoppingCar: (req, res) => {
        return res.send('shoppingcar');
    },

    detailproduct: (req, res) => {
        return res.send('detalleproducto')
    }
    */
};

module.exports = controller;