import { Link } from 'react-router-dom';
import './navbarMenu.css';

export const NavbarMenu = () => {
    return (
        <ul id="navbarMenu">
            <li className="navbarMenuItem">
                <Link to="" className="navbarMenuLink">Accueil</Link>
            </li>
            <li className="navbarMenuItem">
                <Link to="" className="navbarMenuLink">A propos</Link>
            </li>
            <li className="navbarMenuItem">
                <Link to="" className="navbarMenuLink">Contact</Link>
            </li>
        </ul>
    )
}