import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import './CartItems.css';

 

const CartItems = ({id, name, quantity, price}) =>{

    const {deleteItem} = useContext(CartContext)

    const remove = (id) =>{
        deleteItem(id)
    }

    
    return(
        <div className="cartItems">
           
            <div className='cartItemsDetalle'>
                <p>{name}</p> 
            </div>
            <div className='cartItemsPrice'>
                    <p>Precio Unitario</p><span>${price}</span>
            </div>
            <div className='cartItemsPrice'>
                    <p>Cantidad</p><span>{quantity}</span>
              </div>
            <div className='cartItemsPrice'>
                    <p>Subtotal</p><span>${quantity * price}</span>
                </div> 
            <button onClick={() => remove(id)} className='cartRemoveButton'>
                X
            </button>
        </div>
    )
}


export default CartItems