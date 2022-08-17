import './ItemDetailProduct.css'; 
//import { getProd } from '../../asyncMock';
import { useState,useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { dbAccesorios } from '../../services/firebase'; 

const ItemDetailContainer = (addItem) => { 

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

   
    useEffect(() => {
        
        getDoc(doc(dbAccesorios,'products',productId)).then(response => {
            const info = response.data()
            const producto = {id: response.id, ...info}
            setProduct(producto)
        }).catch(error =>{
            console.log(error)
        }).finally(() => {
                 setLoading(false)
             })

       // getProd(productId).then(response => {
         //   setProduct(response)
       // }).finally(() => {
       //     setLoading(false)
      //  })
    }, [productId])

  
    if(loading) {
        return <h1>Cargando...</h1>
    }


    return( 
        <>
        <div className='ContenedorDetailProduct'>
            <ItemDetail {...product} addItem={addItem}/>
         </div>
         </>
    )

}

export default ItemDetailContainer