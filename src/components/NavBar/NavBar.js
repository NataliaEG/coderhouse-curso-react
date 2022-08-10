import './NavBar.css';
import logo from '../../assets/logo1.png';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className='Navbar'>
            <div className='Logo'>
            <Link to='/' ><img src={logo} alt="logo-marca" className='logo-menu' /> </Link>
            </div>
            <div className='Menu'>
                <ul className='pestañas'> 
                    <li className='opcion'> <Link to='/category/cargadores' > Cargadores </Link></li>
                    <li className='opcion'> <Link to='/category/auriculares' > Auriculares </Link></li>
                    <li className='opcion'> <Link to='/category/protectores' > Protectores </Link></li>
                </ul>
                
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;