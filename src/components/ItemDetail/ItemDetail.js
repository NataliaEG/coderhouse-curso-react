import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState,useContext  } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({ id, name, category, img, price, stock, description}) => {

    const [quantity, setQuantity] = useState(0)

    const { addProd, getQuantityId } = useContext(CartContext)

    const quantityAdded = getQuantityId(id)

    const handleOnAdd = (quantity) => {
        console.log('Cantidad de items agregados: ', quantity)
        setQuantity(quantity)
        addProd({id, name, price, quantity})
    }

 

    return (
        <>
        <div className='DetailProduct'>

        <div className='leftProduct'>
            <img src={img} className='imgProductDetail' alt="Imagen producto"/>
        </div>

        <div className='rightProduct'>
            <p key={id} className='nameDetailsProduct'>{name}</p>
            <p className='priceDetailsProduct'>${price}</p>    
            {quantity > 0 
                ? <Link to="/cart" className='link-cart'>Ir al carrito</Link> 
                : <ItemCount stock ={stock} onAdd={handleOnAdd} initial={quantityAdded} />   } 
        </div>
        
    </div>

        <div className='detailsProductCousnt'> 
                <p className='titleDetailsProduct'> Detalle</p>  
                <p className='detailsProduct'> {description}</p>     
        </div>
        </>
    )
}

export default ItemDetail