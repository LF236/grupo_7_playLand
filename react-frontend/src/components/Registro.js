import '../CSS/registro.css';
const Registro = () => {
    return(
        <>
        <main className='registro'>
        <h3 id="title_register">Sign up</h3>
                <form method="POST" action="/register" enctype="multipart/form-data">
                <label for="firstName">Nombre</label>
                <input type="text" name="firstName" size="40" id="firstName" value=""/>

                <label for="lastName">Apellido</label>
                <input type="text" name="lastName" size="40" id="lastName" value=""/>

                <label for="email">Correo electrónico</label>
                <input type="email" name="email" size="40" id="email" value=""/>

                <label for="emailConfirm">Verificar correo electrónico</label>
                <input type="email" name="emailConfirm" size="40" id="emailConfirm" value=""/>

                <label for="loginPassword">Contraseña</label>
                <input type="password" size="40" id="loginPassword" name="loginPassword"
                    title="Letters and digits only (at least 6)" value=""/>

                <label for="loginPasswordConfirm">Verificar contraseña</label>
                <input type="password" size="40" id="loginPasswordConfirm" name="loginPasswordConfirm"/>

                <label for="avatar">Adjunte Foto de perfil</label>
                <input type="file" name="avatar" id="avatar" accept=".png, .jpg, .gif, .webp"/>

                <input type="submit" value="Enviar" id="registrar_usuario"/>
                <input type="submit-2" value="Borrar"/>
            </form>
        </main>        
        </>
    );
}

export default Registro;