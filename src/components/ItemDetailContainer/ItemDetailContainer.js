import './ItemDetailProduct.css'; 
import { getProd } from '../../asyncMock';
import { useState,useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {useParams} from 'react-router-dom';


const ItemDetailContainer = (props) => { 

    const [product, setProduct] = useState([])

    const {productId} = useParams()

   
    useEffect(() => {
        getProd(productId).then(response => {
            setProduct(response)
        })
    }, [ ])


    const handleOnAdd = (quantity) => {
        console.log('Cantidad de items agregados', quantity)
    }
        


    return( 
        <>
        <div className='ContenedorDetailProduct'>
                <div className='DetailProduct'>

                    <div className='leftProduct'>
                        <img src={product.img} className='imgProductDetail' alt="Imagen producto"/>
                    </div>

                    <div className='rightProduct'>
                        <p key={product.id} className='nameDetailsProduct'>{product.name}</p>
                        <p className='priceDetailsProduct'>${product.price}</p>    
                        <ItemCount stock ={10} initial={1} onAdd={handleOnAdd} />  
                    </div>
                    
                </div>

                    <div className='detailsProductCousnt'> 
                            <p className='titleDetailsProduct'> Detalle</p>  
                            <p className='detailsProduct'> {product.description}</p>     
                    </div>
              </div>
            </>
    )

}

export default ItemDetailContainer