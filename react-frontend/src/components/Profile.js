import '../CSS/detalle.css';
const Profile= () => {
    return(
        <>
                <div class="wrapper style3">
        <div class="inner">
            <div class="profiles"/>
                <div class="profile">
                    <div class="image">
                        <img src="<%= infoPerfilUsuario.img %> " alt="profile_pic"/>
                    </div>
                    <div class="content">
                        <h3>nombreUsuario </h3>
                        <p>infoPerfilUsuario.email</p>
                        <a href="/products/create" id="special" class="special">Nuevo producto</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Profile;