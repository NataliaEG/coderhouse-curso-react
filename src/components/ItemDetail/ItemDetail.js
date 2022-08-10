import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, category, img, price, stock, description}) => {



    const handleOnAdd = (quantity) => {
        console.log('Cantidad de items agregados: ', quantity)
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
            <ItemCount stock ={stock} onAdd={handleOnAdd} />  
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