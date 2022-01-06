import '../CSS/registro.css';
import '../JS/check_fields_userRegister';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Registro = () => {
    const [form, setForm] = useState({});

    const handleFormChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'POST',
            url: `http://localhost:4000/test`,
            data: "hola"
        }).then(response => {
            console.log(response);
        })
    }

    return (
        <>
            <main className='registro'>
                <h3 id="title_register">Sign up</h3>
                <h2 id="error-message">Mensaje Error</h2>
                <form enctype="multipart/form-data" onSubmit={handleSubmit}>
                    <label htmlFor="firstName">Nombre</label>
                    <input type="text" name="firstName" size="40" id="firstName" onChange={handleFormChange} />

                    <label htmlFor="lastName">Apellido</label>
                    <input type="text" name="lastName" size="40" id="lastName" onChange={handleFormChange}/>

                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" name="email" size="40" id="email" onChange={handleFormChange} />

                    <label htmlFor="emailConfirm">Verificar correo electrónico</label>
                    <input type="email" name="emailConfirm" size="40" id="emailConfirm" onChange={handleFormChange} />

                    <label htmlFor="loginPassword">Contraseña</label>
                    <input type="password" size="40" id="loginPassword" name="loginPassword"
                        title="Letters and digits only (at least 6)" onChange={handleFormChange} />

                    <label htmlFor="loginPasswordConfirm">Verificar contraseña</label>
                    <input type="password" size="40" id="loginPasswordConfirm" name="loginPasswordConfirm" onChange={handleFormChange} />

                    <label htmlFor="avatar">Adjunte Foto de perfil</label>
                    <input type="file" name="avatar" id="avatar" accept=".png, .jpg, .gif, .webp" onChange={handleFormChange}/>

                    <input type="submit" value="Enviar" id="registrar_usuario" />
                    <input type="submit-2" value="Borrar" />
                </form>
            </main>
        </>
    );
}

export default Registro;