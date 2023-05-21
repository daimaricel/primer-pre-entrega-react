import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { idCat } = useParams();

  useEffect(() => {
    const funcionProductos = idCat ? getProductosPorCategoria : getProductos;

    funcionProductos(idCat)
      .then((res) => setProductos(res))
      .catch((error) => console.log(error));
  }, [idCat]);

  return (
    <>
      <h2>{(greeting = "Bienvenidos a nuestra tienda virtual")}</h2>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
