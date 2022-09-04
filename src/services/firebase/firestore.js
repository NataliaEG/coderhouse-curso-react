import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore'
import { dbAccesorios } from '.' 
import {adapterProduct} from '../../adapters/adaptersProds' 


//funcion que trae todos los productos o aquellos de una categoria (ItemListContainer)
export const myProducts = (categoryId) => {

        const reffColeccion  = !categoryId //tenemos id de categoria?
           ? collection(dbAccesorios,'products') //si no hay id de categoria traemos todos
           : query(collection(dbAccesorios,'products'), where('category', '==', categoryId)) // si hay id filtramos productos

        return getDocs(reffColeccion).then(response=>{ 
            const products = response.docs.map(doc =>{ 
                return adapterProduct(doc) //funcion adaptadora
            }) 
            return products
        }) .catch(error=>{
            console.log(error)
        })  
}
 

//funcion que trae un solo producto para ver su detalle (itemDetailContainer)
export const myProd = (productId) => {
    return getDoc(doc(dbAccesorios,'products',productId)).then(response => {
        const info = response.data()
        const prod = {id: response.id, ...info}
        return prod
    }).catch(error =>{
        console.log(error)
    }) 
}

