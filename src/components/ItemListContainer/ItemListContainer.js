import './ItemListContainer.css';
import { getProduct } from '../../asyncMock';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = (props) => { 

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        getProduct().then(Response => {
            setProducts(Response) 
        }).catch(error => {
            console.log(error)
        }).finally(()=> {
            setLoading(false)
        })
    })

     

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