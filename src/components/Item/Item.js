import './Item.css'; 
import { Link } from 'react-router-dom';


const Item = ({product}) => {
   
    return (
        

        <div className='CartProduct'>
                <img src={product.img} className='imgProduct' alt="Imagen producto"/>
                <p key={product.id} className='nameProduct'>{product.name}</p>
                <p className='priceProduct'>${product.price}</p>    
                <Link to={`/detail/${product.id}`} className='detalleProduct'>Ver mas detalle</Link>
        </div>
         
    )
}

export default Item 