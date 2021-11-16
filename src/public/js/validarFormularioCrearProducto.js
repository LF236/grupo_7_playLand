const buttonUpdateProducto = document.getElementById('button-subir');

buttonUpdateProducto.addEventListener('click', (e) => {
    const formulario = e.target.form;
    const title_error = document.getElementById('error-message');
    console.log(formulario);
    console.log(formulario.nombre_producto.value);
    // Verificamos el nombre 
    if(formulario.main_image.value == "") {
        title_error.innerHTML = "Error - Agregue la imágen principal"
        title_error.style.display = 'block';
        e.preventDefault();
        return;
    }
    if(formulario.imagenPrincipal.value == "") {
        title_error.innerHTML = "Error - Agregue imagenes complementaras"
        title_error.style.display = 'block';
        e.preventDefault();
    }
})