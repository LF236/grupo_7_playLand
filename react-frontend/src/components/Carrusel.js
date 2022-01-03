require('../JS/carouselAnimation');
const Carrusel = () => {
    return (
        <>
            <aside className="carousel">
                <section className="carousel-content">
                    <div className="title">
                        <h3>GAME OF THE MONTH</h3>
                    </div>
                    <div className="buttons">
                        <div className="images-i">
                            <span className="icon icon-circle" id="images-i-element-1"></span>
                            <span className="icon icon-circle" id="images-i-element-2"></span>
                            <span className="icon icon-circle" id="images-i-element-3"></span>
                            <span className="icon icon-circle" id="images-i-element-4"></span>
                            <span className="icon icon-circle" id="images-i-element-5"></span>
                        </div>
                    </div>
                </section>
                {/* Sección para colocar las imágenes del carrusel */}
                <section className="carousel-content-images" id="carousel-content-images">
                    <article style={ { backgroundImage: "url(/carousel/1.jpg)" } } className="carousel-content-images-item">
                    </article>
                    <article style={ { backgroundImage: "url(/carousel/1.jpg)" } } className="carousel-content-images-item">
                    </article>
                    <article style={ { backgroundImage: "url(/carousel/3.jpg)" } } className="carousel-content-images-item">
                    </article>
                    <article style={ { backgroundImage: "url(/carousel/4.jpg)" } } className="carousel-content-images-item">
                    </article>
                    <article style={ { backgroundImage: "url(/carousel/5.jpg)" } } className="carousel-content-images-item">
                    </article>
                </section>
            </aside>
        </>
    )
}

export default Carrusel;