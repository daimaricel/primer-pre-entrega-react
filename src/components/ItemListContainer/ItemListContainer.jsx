import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, where, query} from "firebase/firestore";
import { bd } from "../../Services/config";


const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { idCat } = useParams();


  useEffect( () =>{
     const funcionProductos = idCat ? query (collection(bd, "productos" ), where ("idCategoria", "==", idCat)) : collection (bd, "productos"); 
     
     getDocs(funcionProductos)
     .then (res =>{
      const nuevosProductos = res.docs.map (doc => { 
      const data =doc.data()
      return{id: doc.id, ...data}
     })
      setProductos(nuevosProductos);
    })
    .catch(error =>console.log (error))
    }, [idCat])
  return (
    <div className="ajustar">
      <h2>{(greeting = "Bienvenidos a nuestra tienda virtual")}</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
