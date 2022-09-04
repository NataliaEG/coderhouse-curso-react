import './CartWidget.css';
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { getQuantityCart } = useContext(CartContext)

    const quantity = getQuantityCart()

    return (
        <Link to='/cart' className="CartWidget" disabled={quantity === 0 ? true : null}> 
            <div className='cart-container' >
                <img src='images/agregar-carrito.png' alt="cart" className="cart"/>
                {quantity}
            </div>
         </Link>   
    )
}

export default CartWidget