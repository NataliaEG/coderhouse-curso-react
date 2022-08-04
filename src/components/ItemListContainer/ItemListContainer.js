import './ItemListContainer.css';
import { getProduct, getProductsByCategory } from '../../asyncMock';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';


const ItemListContainer = (props) => { 

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

    


    return(
        <>
        <h1>{props.greeting}</h1>
         <ItemList  products={products}/>
         
        </>
    )
}

export default ItemListContainer