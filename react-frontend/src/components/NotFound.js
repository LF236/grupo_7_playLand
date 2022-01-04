import '../CSS/error_404.css';
const imgError = require ('../img/d68c6d04-5168-4906-9023-8ad5691f3deb.gif');
const NotFound = () => {
    return(
        <>
            <title>Error 404</title>
            <section className="error-404">
            <article className="error-404-content">
                <h1>404</h1>
                <p>Upps, ¡No hay nada aqui!</p>
                <a href="./Home" id="back-home">Regresar a la página principal</a>
            </article>

            <div className="image">
            <img src={imgError} />
            </div>
            
        </section>
        </>
    );
}

export default NotFound;