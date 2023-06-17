import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CarroContext } from "../Context/CarritoContext";

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
  
  const {addProducts} =useContext(CarroContext);
  
  const handleCantidad =  (cantidad) =>{
    setAgregarCantidad (cantidad);
    
    const item = {id, producto, modelo, marca, precio, img, descripcion};
    addProducts(item, cantidad);
  }
  return (
    <div className="contenedorDescripcion">
      <h2>
        {producto} {marca} {modelo}
      </h2>
      <img className="imm" src={img} alt={producto} />
      <p>Descripción:</p>
      <p>{descripcion}</p>
      <p className="precio">Precio: ${precio}</p>
      {
        agregarCantidad >0 ? (<Link to = "/cart">Terminar compra</Link>) : (<ItemCount inicial = {1} stock = {stock} funcionIncluir={handleCantidad}/>)
      }
    </div>
  );
};

export default ItemDetail;
