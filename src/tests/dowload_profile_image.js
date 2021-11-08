const fs = require('fs');
const wget = require('wget-improved');
const http = require('https');
const images_file = '../data/user.json';
const profile_images_route = '../public/img/profile_images';
const { v4: uuid } = require('uuid');

const download = (url, dest, cb) => {
    var file = fs.createWriteStream(dest);
    http.get(url, function (response) {
        response.pipe(file);
        file.on('finish', function () {
            file.close(cb);
        });
    });
}

const main = () => {
    const profile_data = JSON.parse(fs.readFileSync(images_file, 'utf-8'));
    const data_final = [];
    profile_data.forEach(profile_info => {
        const id_image = uuid();
        let { id, nombre, apellidos, email, password, imagen_perfil, editor } = profile_info;
        id = id_image;
        profile_info.id = id_image;
        // Crear folder
        fs.mkdirSync(`${profile_images_route}/${id_image}`);
        console.log(imagen_perfil);
        download(imagen_perfil, `${profile_images_route}/${id}/perfil_${id}`, () => {
            // Manejo de errores
        });
        // Descargar imágen
        profile_info.imagen_perfil = `/img/profile_images/${id}/perfil_${id}`;
        data_final.push(profile_info);
    })
    fs.writeFileSync('./tmp_new.json', JSON.stringify(data_final, null, ' '));
    console.log(data_final);
}

main();