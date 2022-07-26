import './ItemList.css'
import Item from "../Item/Item" 

const ItemList = ({products}) => {
    return(
        <div className="containerCart">
            {products.map(product => (
              <Item product={product} />
            ))}
        </div>
    )
}

export default ItemList