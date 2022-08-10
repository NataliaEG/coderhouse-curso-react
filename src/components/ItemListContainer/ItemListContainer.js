import './ItemListContainer.css';
import { getProduct, getProductsByCategory } from '../../asyncMock';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';


const ItemListContainer = ({ greeting }) => { 

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
 
    useEffect(() =>{

        const asynFunction = categoryId ? getProductsByCategory : getProduct 

        
        asynFunction(categoryId).then(Response => {
                setProducts(Response) 
            }).catch(error => {
                console.log(error)
            }).finally(()=> {
                setLoading(false)
            })
      
        
    },[categoryId])

     

    if(loading){
        return <><span className='loader'> </span>
               <p className='loaderText'>Cargando... </p>
               </>
    }

    if(products.length === 0) {
        return categoryId ? <h1>No hay productos en nuestra categoria {categoryId}</h1> : <h1>No hay productos disponibles</h1>
    }



    return(
        <>
        <h1>{`${greeting} ${categoryId || ''}`}</h1>
         <ItemList  products={products}/>
         
        </>
    )
}

export default ItemListContainer