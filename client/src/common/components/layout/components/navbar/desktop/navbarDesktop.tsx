import './navbarDesktop.css';
import { Link } from 'react-router-dom';

export const NavbarDesktop = () => {
    return (
        <nav id="navbarDesktop">
            <Link to="/" className="navbarDesktopLogo">Cyriac du Chatenet X Pole emploi</Link>
            <ul className="navbarDesktopList">
                <li className="navDesktopIte">
                    <Link to="/" className="navbarDesktopLink">Accueil</Link>
                </li>
                <li className="navDesktopIte">
                    <Link to="/a-propos" className="navbarDesktopLink">A propos</Link>
                </li>
                <li className="navDesktopIte">
                    <Link to="/contact" className="navbarDesktopLink">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}