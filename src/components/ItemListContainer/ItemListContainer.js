import './ItemListContainer.css'; 
//import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'; 
import { myProducts } from '../../services/firebase/firestore'

import { useAsync } from '../../hooks/useAsync' 
import { fetcher } from '../../utils/fetcher' 


const ItemListContainer = ({ greeting }) => {  
    const {categoryId} = useParams()

    const { data, isLoading,error} = useAsync(fetcher(myProducts, categoryId), [categoryId]) //Funcion que busca los productos de firestore desde el hooks


    //const [products, setProducts] = useState([])
    //const [loading, setLoading] = useState(true)
    //Funcion que busca los productos de firestore
    //useEffect(() =>{

     //   myProducts(categoryId).then(prods =>{ //myProducts es una funcion que traemos desde la carpeta services
      //          setProducts(prods)
     //   }).catch(error=>{
     //            console.log(error)
     //     }) .finally(()=> {
     //            setLoading(false)
     //        })
   // },[categoryId])
   
     
    //Funcion cargando productos
    if(isLoading){
        return <><span className='loader'> </span>
               <p className='loaderText'>Cargando... </p>
               </>
    }
  
    if (error){}

    //funcion que avisa que una categoria esta vacia
    if(data.length === 0) {
        return categoryId ? <h1>No hay productos en nuestra categoria {categoryId}</h1> : <h1>No hay productos disponibles</h1>
    }
  


    return(
        <>
        <h1>{`${greeting} ${categoryId || ''}`}</h1>
         <ItemList  products={data}/>
         
        </>
    )
}

export default ItemListContainer