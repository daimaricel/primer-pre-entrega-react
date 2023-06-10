import { useContext } from "react";
import { CarroContext, CarroProvider } from "../Context/CarritoContext";
import "./CartItem.css";

const CartItem = ({item, cantidad} ) => {
    const {deleteItem}=useContext(CarroContext);
  return (
    <div className="divCartI">
        <h4>{item.producto} {item.marca} {item.modelo}</h4>
        <div className="centrarD">
        <img src={item.img} alt={item.producto} className="imgC"/>
        <div>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: ${item.precio}</p>
        <button onClick ={() => deleteItem(item.id)}>Eliminar</button>
        </div>
        </div>
    </div>
  )
}

export default CartItem