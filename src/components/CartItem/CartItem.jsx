import { useContext } from "react"
import { CarroContext, CarroProvider } from "../Context/CarritoContext"

const CartItem = ({item, cantidad} ) => {
    const {deleteItem}=useContext(CarroContext);
  return (
    <div>
        <h4>{item.producto} {item.marca} {item.modelo}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: ${item.precio}</p>
        <button onClick ={() => deleteItem(item.id)}>Eliminar</button>
    </div>
  )
}

export default CartItem