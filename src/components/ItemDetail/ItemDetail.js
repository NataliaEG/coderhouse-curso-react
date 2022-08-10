import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';


const ItemDetail = ({ id, name, category, img, price, stock, description}) => {

    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (quantity) => {
        console.log('Cantidad de items agregados: ', quantity)
        setQuantity(quantity)
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
            {quantity > 0 ? <Link to="/cart" className='link-cart'>Ir al carrito</Link> : <ItemCount stock ={stock} onAdd={handleOnAdd} />   } 
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