import './ItemDetailProduct.css'; 
import { getProd } from '../../asyncMock';
import { useState,useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom';


const ItemDetailContainer = (props) => { 

    const [product, setProduct] = useState([])

    const {productId} = useParams()

   
    useEffect(() => {
        getProd(productId).then(response => {
            setProduct(response)
        })
    }, [productId])

  


    return( 
        <>
        <div className='ContenedorDetailProduct'>
            <ItemDetail {...product}/>
         </div>
         </>
    )

}

export default ItemDetailContainer