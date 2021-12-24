import { Link } from 'react-router-dom'

import '../../ICONS/style.css';
import '../../JS/menu_animation';
const Header = () => {
    return (
        <>
            <div className="header-top">
                {/* Formulario para buscar un producto */}
                <form>
                    <input type="text" name="search" id="search" placeholder="&#xe986; Search..." className="icon-search" />
                </form>

                <span className="icon icon-menu" id="menu_button"></span>

                <Link to="/" className="logo">
                    <img src={require('../../img/logo.png')} alt="logo_playland" />
                </Link>

                {/* Session para el inicio de sesión, es necesario configurar todo esto en base a las sesiones */}
                <span className="icon icon-add_shopping_cart"></span>
                <div className="session">
                    <a href="#" className="icon icon-user"></a>
                    <a href="/login">LOG IN</a>
                    <span className="icon icon-add_shopping_cart carr"></span>
                </div>
            </div>

            {/* Menú para dispositivos moviles */}
            <nav id="menu">
                {/* Este icono de x y la sección "session" solo es para el diseño movil */}
                <div className="icon-close-menu"><span className="icon icon-x" id="icon-x"></span></div>
                {/* Es necesario solucionar la parte de la sesión cuando se consuma con la API */}
                <div className="session">
                    <a href="#" className="icon icon-user"></a>
                    <a href="/login">LOG IN</a>
                </div>
                <ul>
                    <li className="actual_page"><a href="#">Home</a></li>
                    <li><a href="#">Label II</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header;