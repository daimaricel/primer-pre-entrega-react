import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({productos}) => {
  return (
    <div className="contenedorProducts">
        {productos.map(prod => <Item key={prod.nombre} {...prod}/>)}
    </div>
  )
}

export default ItemList