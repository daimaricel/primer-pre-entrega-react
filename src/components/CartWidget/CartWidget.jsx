import "./CartWidget.css";
import { useContext } from "react";
import { CarroContext } from "../Context/CarritoContext";
import { Link } from "react-router-dom";
import "./CartWidget.css"


const CartWidget = () => {
  const { totalItems } = useContext(CarroContext);
  return (
    <div className="carro">
      <Link to="/cart">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/18/07/40/shopping-cart-728407_1280.png"
          alt="carrito de compras"
          className="chart"
        />
        {
          totalItems > 0 && <span>{totalItems}</span>
        }
      </Link>
    </div>
  );
};

export default CartWidget;
