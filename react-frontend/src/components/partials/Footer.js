import '../../ICONS/style.css';
const Footer = () => {
    return (
        <>
            <img src={require('../../img/logo_white.png')} alt='Icono_White' />
            <div className='footer-icons'>
                <span className="icon icon-facebook"></span>
                <span className="icon icon-instagram"></span>
                <span className="icon icon-twitter"></span>
            </div>
            <span className='copy'>©2021 by Group 7</span>
        </>
    )
}

export default Footer;