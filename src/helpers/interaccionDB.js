const fs = require('fs');
const path = require('path');

const fileProducts = path.join(__dirname + '/../data/product.json');
const fileUsers = path.join('..', 'data', 'user.json');


const getDataProductsJSON = () => {
    console.log(fileProducts);
    if(!fs.existsSync(fileProducts)) {
        return null;
    }
    const info = fs.readFileSync(fileProducts, 'utf-8');
    const data = JSON.parse(info);
    return data;
}


const getDataUsersJSON = () => {
    if(!fs.existsSync(fileUsers)) {
        return null;
    }
    console.log(fileUsers);
    const info = fs.readFileSync(fileUsers, 'utf-8');
    
    const data = JSON.parse(info);
    return data;
}

const saveDBUsers = (data) => {
    fs.writeFileSync(fileUsers, JSON.stringify(data, null, ' '));
}

const saveDBProducts = (data) => {
    fs.writeFileSync(fileProducts, JSON.stringify(data, null, '\t'));
}


module.exports = {
    getDataProductsJSON,
    saveDBProducts,
    getDataUsersJSON,
    saveDBUsers
}
