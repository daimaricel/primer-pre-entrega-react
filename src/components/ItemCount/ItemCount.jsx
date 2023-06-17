import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({inicial, stock, funcionIncluir}) => {
    const [contador, setContador] = useState(inicial);
     
    
     const incrementar = () => {
        if (contador<stock){
        setContador(contador + 1);
        }
    }

    const disminuir = ()=>{
        if (contador > inicial){
        setContador(contador - 1);
        }
    }

  return (
    <div className="contadorEstilo">
    <div className="contador">
        <button onClick={disminuir}>-</button>
        <p>{contador}</p>
        <button onClick={incrementar}>+</button>
    </div>
    <button className= "button" onClick={() => funcionIncluir (contador)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount