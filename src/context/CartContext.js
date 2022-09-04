import { useState, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    //agregar productos al carrito
    const addProd = (productNew) => {
        if(!prodInCart(productNew.id)) {
            setCart([...cart, productNew])
        } else {
            const cartNew = cart.map(prod => {
                if(prod.id === productNew.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: productNew.quantity
                    }
                    return productUpdated
                } else {
                    return prod
                }
            })
            setCart(cartNew)
        }
    }

    //cantidad de productos en el carrito
    const getQuantityCart = () => {
        let cant = 0
        cart.forEach(prod => {
            cant += prod.quantity
        })

        return cant
    }

    //buscar item en el carrito
    const prodInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    //eliminar item del carrito
    const deleteItem = (id) => {
        const updateCart = cart.filter(prod => prod.id !== id)
        setCart(updateCart)
    }

    //Vaciar el carrito
    const deleteCart = () => {
        setCart([])
    }

    //Cantidad de un mismo producto en el carrito
    const getQuantityId = (id) => {
        const productoConsultado = cart.find(prod => prod.id === id)
        return productoConsultado?.quantity
    }

    //Total de la compra
    const getTotalPrice = () =>{
        let totalCompra = 0
        cart.forEach(item =>{
            totalCompra += item.quantity * item.price
        })
        return totalCompra
    }

    return (
        <CartContext.Provider value={{ cart, addProd, prodInCart, deleteItem, deleteCart, getQuantityCart, getQuantityId, getTotalPrice }}>
            {children}
        </CartContext.Provider> 
    )
}
