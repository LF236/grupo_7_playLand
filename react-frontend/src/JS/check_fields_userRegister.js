document.addEventListener('DOMContentLoaded', () => {
    const buttonUser = document.getElementById('registrar_usuario');
    buttonUser.addEventListener('click', (e) => {
        const title_error = document.getElementById('error-message');
        let isFormOk = true;
        // Verificamos si el campo de nombre esta lleno
        if (e.target.form.firstName.value == "") {
            title_error.innerHTML = "Error - El nombre esta vacio"
            title_error.style.display = 'block';
            e.preventDefault()
            return;
        }
        // Verificamos el capo de apellidos
        if (e.target.form.lastName.value == "") {
            title_error.innerHTML = "Error - El campo de Apellido esta vacio"
            title_error.style.display = 'block';
            e.preventDefault()
            return;
        }
        // Verificamos los correo
        if (e.target.form.email.value != e.target.form.emailConfirm.value) {
            title_error.innerHTML = "Error - Verifique que el correo sea el mismo"
            title_error.style.display = 'block';
            e.preventDefault()
            return;
        }
        // Vericamos la contraseña
        if (e.target.form.loginPassword.value != e.target.form.loginPasswordConfirm.value) {
            title_error.innerHTML = "Error - Verifique que la contraseña sea la misma"
            title_error.style.display = 'block';
            e.preventDefault()
            return;
        }
        // Verificar la foto de perfil
        if (e.target.form.avatar.value == "") {
            title_error.innerHTML = "Error - Adjunte una foto de perfil"
            title_error.style.display = 'block';
            e.preventDefault()
            return;
        }

    })
})
