import {addDoc, collection, Timestamp, getDocs, documentId, writeBatch,query, where } from 'firebase/firestore' //para agregar documentos
import { dbAccesorios } from '../../services/firebase'; //mi bd en firebase
import { useContext, useState  } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

import './Checkout.css'  

const Checkout = () => {

    const {cart, getTotalPrice, getQuantity, clearCart } = useContext(CartContext)

    const quantity = getQuantity()  
    const totalPrice = getTotalPrice() 
    const [name, setName] = useState("") 
    const [tel, setTel] = useState(0) 
   const  [mail, setMail] = useState("") 



    //funcion que crea el objeto orden y lo agrega a la coleccion de firestore
 const generarOrden = async (e) => {  
    try {
    e.preventDefault();
    if (datosOk()){
                    const newOrder ={
                        buyer:{
                            name: name,
                            phone: tel,
                            email: mail
                        },
                        items:cart,
                        total: totalPrice,
                        date: Timestamp.fromDate(new Date()) //agrega la fecha del dia 
                    }

                    const idsCart = cart.map(prod => prod.id)
                    const prodDb = collection(dbAccesorios,'products')
                    const prodAdd = await getDocs(query(prodDb, where(documentId(),'in', idsCart)))


                    const { docs } = prodAdd
                    
                    const arraySinStock = []

                    const batchUpdate = writeBatch(dbAccesorios)


                    docs.forEach(doc => {
                        const prodDoc = doc.data()
                        const stockReal = prodDoc.stock 

                        const prodInCart = cart.find(prod => prod.id === doc.id)
                        const prodCount = prodInCart?.quantity

                        if (stockReal >= prodCount) {
                            console.log('puedes comprar el producto')
                            batchUpdate.update(doc.ref, { stock: stockReal - prodCount})
                        }else {
                            arraySinStock.push({ id:doc.id, ...prodDoc})
                        }
                    })

                    if(arraySinStock.length === 0) {
                        const refOrder = collection(dbAccesorios, 'ordenes')
                        const orderCreada = await addDoc(refOrder, newOrder)
                        batchUpdate.commit()
                        console.log(orderCreada.id) //id de la orden creada
                        clearCart() 
                    }else{
                        console.log('hay prodyctos sin stock')
                    } 

                }  
            }catch (error) {
                console.log(error);
           } 
}


if(quantity === 0){
    return (
    <div className='CarritoVacio'>
        <h1 className='titleCarritoVacio'>Orden Generada</h1>
        <Link className='LinkCarritoVacio' to='/'>Volver al inicio</Link>
    </div>
    )
}


const datosOk = () => {
    if (name.length <= 0) {
      alert("Debe agregar un nombre")
      return false;
    }
    if (tel.length <= 0 || isNaN(parseInt(tel))) {
      alert("El telefono no puede contener caracteres")
      return false;
    }
    if (mail.length <= 3 || !String(mail).includes("@")) {
      alert("El correo electrónico no es valido")
      return false;
    }
    return true;
  }


    return (
        <div>
            <h1>Checkout</h1>
                 <form className="form">
                    <input onChange={(e) => {setName(e.target.value);}} className="form__input" type="text"  placeholder="Nombre" required/>
                    <input  onChange={(e) => {setTel(e.target.value);}} className="form__input" type="tel"  placeholder="Telefono" required/>
                    <input onChange={(e) => {setMail(e.target.value);}} className="form__input" type="email"  placeholder="Mail" required/>
                    <button className="form__btn" type="submit" onClick={generarOrden}> Generar Orden </button>
                </form>
 
        </div>
    )
}

export default Checkout