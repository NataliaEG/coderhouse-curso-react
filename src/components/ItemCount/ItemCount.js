import { useState } from "react"
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(0);

    const restar = () => {
        if (count > initial) {
            setCount (count - 1)
        }
       
    }

    const sumar = () => {
        if (count < stock){
            setCount (count + 1)
        }
        
    }

    

    return(
        <div className="container-count">
            <div className="botones-count">
                <button onClick={restar}  disabled={count === initial ? true : null} className="bttn-op">-</button>
                <p> {count} </p>
                <button onClick={sumar} disabled={count === stock ? true : null}  className="bttn-op">+</button>
            </div>
            <button onClick={()=> onAdd(count)} className="bttn-agregar">Agregar al carrito</button>
        </div>
    )

}

export default ItemCount