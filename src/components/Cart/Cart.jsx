import { CarroContext } from "../Context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"




const Cart = () => {
    const { carrito, total, totalItems, carroVacio } = useContext(CarroContext);
    if (totalItems === 0) {
        return (
            <div className="ajustar">
                <h3>El carrito está vacío</h3>
                <Link to="/" className="links">Comprar</Link>
            </div>
        )
    }

    return (
        <div className="ajustar">
            {carrito.map(producto => <CartItem key={producto.id}{...producto} />)}
            <h3>Cantidad de productos: {totalItems} </h3>
            <h3 className="total">Total: ${total}</h3>
            <div className="centrarDiv">
                <button onClick={() => carroVacio()} className="button">Vaciar carrito</button>
                <Link to="/" className="links">Seguir comprando </Link>
                <Link to="/checkout" className="links">Finalizar compra </Link>
            </div>
        </div>
    )
}

export default Cart