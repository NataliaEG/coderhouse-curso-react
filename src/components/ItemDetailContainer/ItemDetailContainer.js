import './ItemDetailProduct.css'; 
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom';


import { myProd } from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync' 
import { fetcher } from '../../utils/fetcher' 

const ItemDetailContainer = (addProd) => { 



    const {productId} = useParams()
    const { data, isLoading,error} = useAsync(fetcher(myProd, productId), [productId]) //Funcion que busca el producto de firestore desde el hooks


  //Funcion cargando productos
    if(isLoading) {
        return <h1>Cargando...</h1>
    }

    if (error){}


    return( 
        <>
        <div className='ContenedorDetailProduct'>
            <ItemDetail {...data} addProd={addProd}/>
         </div>
         </>
    )

}

export default ItemDetailContainer