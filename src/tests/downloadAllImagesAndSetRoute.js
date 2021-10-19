const fs = require('fs');
const wget = require('wget-improved');
const http = require('https');
const productosFile = '../data/product.json.copy';
const products_img_route = '../public/img/products_img';

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
    const productsFileData = JSON.parse(fs.readFileSync(productosFile, 'utf-8'));
    productsFileData.forEach(producto => {
        // Get data of the JSON
        const id_producto = producto.id;
        const main_image = producto.main_image;
        const img_1 = producto.detail_image_1;
        const img_2 = producto.detail_image_2;
        const img_3 = producto.detail_image_3;

        // Create Folder
        if (fs.existsSync(`${products_img_route}/${id_producto}`)) {
            fs.rmdirSync(`${products_img_route}/${id_producto}`);
        }

        fs.mkdirSync(`${products_img_route}/${id_producto}`);
        // Download Images

        // Changes de values of vars
        if (producto.main_image) {
            producto.main_image = `/img/products_img/${id_producto}/main_image.webp`;
            download(main_image, `${products_img_route}/${id_producto}/main_image.webp`, () => {
                // Changes de values of vars

            })
        } else {
            producto.main_image = null
        }

        if (producto.detail_image_1) {
            producto.detail_image_1 = `/img/products_img/${id_producto}/detail_image_1.webp`;
            download(img_1, `${products_img_route}/${id_producto}/detail_image_1.webp`, () => {
                // Changes de values of vars

            })
        } else {
            producto.detail_image_1 = null
        }

        if (producto.detail_image_2) {
            producto.detail_image_2 = `/img/products_img/${id_producto}/detail_image_2.webp`;
            download(img_2, `${products_img_route}/${id_producto}/detail_image_2.webp`, () => {
                // Changes de values of vars

            })
        } else {
            producto.detail_image_2 = null
        }

        if (producto.detail_image_3) {
            producto.detail_image_3 = `/img/products_img/${id_producto}/detail_image_3.webp`;
            download(img_3, `${products_img_route}/${id_producto}/detail_image_3.webp`, () => {
                // Changes de values of vars

            })
        } else {
            producto.detail_image_3 = null
        }


    })

    fs.writeFileSync('./tmp.json', JSON.stringify(productsFileData, null, ' '));
};

main();