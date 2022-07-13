import './NavBar.css';
import logo from '../../assets/logo1.png';

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
        </nav>
    )
}

export default NavBar;