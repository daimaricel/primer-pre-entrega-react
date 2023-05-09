import "./Item.css"

const Item = ({producto, marca, modelo, img, precio}) => {
  return (
    <div className="cardProduct">
        <h3>{producto} {marca} {modelo}</h3>
        <img className="imgProduct" src={img} alt={producto}/>
        <p>${precio}</p>
        <button className="btnProduct">Más info</button>

    </div>
  )
}

export default Item