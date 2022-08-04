import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const handleOnAdd = (quantity) => {
    console.log('Cantidad de items agregados', quantity)
}

const Item = ({product}) => {
   
    return (
        

        <div className='CartProduct'>
                <img src={product.img} className='imgProduct' alt="Imagen producto"/>
                <p key={product.id} className='nameProduct'>{product.name}</p>
                <p className='priceProduct'>${product.price}</p>    
                <Link to={`/detail/${product.id}`} className='detalleProduct'>Ver mas detalle</Link>
                <ItemCount stock ={10} initial={1} onAdd={handleOnAdd} />           
        </div>
         
    )
}

export default Item 