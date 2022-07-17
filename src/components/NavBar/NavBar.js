import './NavBar.css';
import logo from '../../assets/logo1.png';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return(
        <nav className='Navbar'>
            <div className='Logo'>
                <img src={logo} className='logo-menu' />
            </div>
            <div className='Menu'>
                <ul className='pestañas'>
                    <li> Empresa </li>
                    <li> Novedades </li>
                    <li> Productos </li>
                    <li> Contacto </li>
                </ul>
                
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;