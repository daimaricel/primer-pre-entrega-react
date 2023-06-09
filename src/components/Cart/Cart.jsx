import { CarroContext } from "../Context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"



const Cart = () => {
    const {carrito, total, totalItems, carroVacio} = useContext(CarroContext);
    if(totalItems === 0) {
        return (
            <>
            <h3>El carrito está vacío</h3>
           <Link to ="/">Comprar</Link>
            </>
        )
    }
 
    return (
    <div>
        {carrito.map(producto => <CartItem key={producto.id}{...producto}/>)}
        <h3>Cantidad de productos: {totalItems} </h3>
        <h3>Total: ${total}</h3>
        <button onClick={()=> carroVacio()}>Vaciar carrito</button>
        <Link to= "/">Seguir comprando </Link>
        <Link to= "/checkout">Finalizar compra </Link>
    </div>
  )
}

export default Cart