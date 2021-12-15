const { getDataProductsJSON, saveDBProducts, getDataUsersJSON, saveDBUsers } = require("./interaccionDB");
const getDataUserById = (idUsuario) => {
    const usuarios = getDataUsersJSON();
    let usuarioBandera = null;
    for (let usuario of usuarios) {
        if (usuario.id == idUsuario) {
            usuarioBandera = usuario;
            break;
        }
    }
    if(usuarioBandera) {
        return usuarioBandera;
    }
    else {
        return null;
    }
}

module.exports = getDataUserById;