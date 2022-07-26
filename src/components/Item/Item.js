import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

const handleOnAdd = (quantity) => {
    console.log('Cantidad de items agregados', quantity)
}

const Item = ({product}) => {
   
    return (
        

        <div className='CartProduct'>
                <img src={product.img} className='imgProduct' alt="Imagen producto"/>
                <p key={product.id} className='nameProduct'>{product.name}</p>
                <p className='priceProduct'>${product.price}</p>    
                <a href="/" className='detalleProduct'>Ver mas detalle</a>
                <ItemCount stock ={10} initial={1} onAdd={handleOnAdd} />           
        </div>
         
    )
}

export default Item 