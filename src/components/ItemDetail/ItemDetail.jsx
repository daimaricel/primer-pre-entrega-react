import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({
  producto,
  marca,
  modelo,
  precio,
  img,
  stock,
  id,
  descripcion,
}) => {

  const [agregarCantidad, setAgregarCantidad] = useState (0)
  
  const handleCantidad =  (cantidad) =>{
    setAgregarCantidad (cantidad);
    console.log("Productos agregados: " + cantidad)
  }
  return (
    <div className="contenedorDescripcion">
      <h2>
        {producto} {marca} {modelo}
      </h2>
      <img className="imm" src={img} alt={producto} />
      <p>Descripción:</p>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>

      {

      }
      {
        agregarCantidad >0 ? (<Link to = "/cart">Terminar compra</Link>) : (<ItemCount inicial = {1} stock = {stock} funcionIncluir={handleCantidad}/>)
      }
    </div>
  );
};

export default ItemDetail;
