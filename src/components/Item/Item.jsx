import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ producto, marca, modelo, img, id, precio }) => {
  return (
    <div className="cardProduct">
      <h3>
        {producto} {marca} {modelo}
      </h3>
      <img className="imgProduct" src={img} alt={producto} />
      <p>${precio}</p>
      <Link to={`/item/${id}`} className="masI"> Más info</Link>
    </div>
  );
};

export default Item;
