import CartItems from '../CartItems/CartItems'
import { CartContext } from '../../context/CartContext' 
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import './Cart.css';

const Cart = () =>{

    const {cart, getTotalPrice, getQuantity, clearCart } = useContext(CartContext)

    const quantity = getQuantity();
    const totalPrice = getTotalPrice();

    if(quantity === 0){
        return (
        <div className='CarritoVacio'>
            <h1 className='titleCarritoVacio'>Su carrito esta vacio</h1>
            <Link className='LinkCarritoVacio' to='/'>Ver productos</Link>
        </div>
        )
    }

    return(
        <div className="CartContainer">
            {cart.map(p => <CartItems key={p.id} {...p}/>)}
            <div className='cartTotal'>
                <div className='cartTextContainer'>
                    <h3>Total de la compra: <span>${totalPrice}</span></h3>
                </div>
                <div className='cartButtons'>
                    <button>Terminar mi compra</button>
                    <button onClick={()=>clearCart()}>Vaciar el carrito</button>
                </div>
            </div>
            
        </div>
    )
}


export default Cart