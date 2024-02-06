import '../css/logo.css';
import LogoImage from '../images/freecodecamp-logo.png';

function Logo() {
    return (
        <div className='logo-container'>
            <img src={LogoImage} className='logo' alt='Logo de freeCodeCamp' />
        </div>
    );
}

export default Logo;