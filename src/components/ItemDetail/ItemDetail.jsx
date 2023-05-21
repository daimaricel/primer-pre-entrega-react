import "./ItemDetail.css";

const ItemDetail = ({
  producto,
  marca,
  modelo,
  precio,
  img,
  id,
  descripcion,
}) => {
  return (
    <div className="contenedorDescripcion">
      <h2>
        {producto} {marca} {modelo}
      </h2>
      <img className="imm" src={img} alt={producto} />
      <p>Descripción:</p>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
    </div>
  );
};

export default ItemDetail;
