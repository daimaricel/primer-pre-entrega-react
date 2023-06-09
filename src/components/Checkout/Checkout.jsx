import { useState, useContext } from "react";
import { CarroContext } from "../Context/CarritoContext";
import { bd } from "../../Services/config";
import { collection, addDoc } from "firebase/firestore";
import "./Checkout.css"


const Checkout = () => {

    const {carrito, carroVacio} = useContext(CarroContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [checkEmail, setCheckEmail] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
  
    const formHandler = (event) =>{
        event.preventDefault();

       if(!nombre || !apellido || !telefono || !email || !checkEmail){
        setError("Hay campos incompletos");
        return;
       }

       if (email !== checkEmail){
        setError ("Los correos electrónicos no coinciden");
        return;
    }
   
    const orden ={
       lista: carrito.map (producto =>({
        id: producto.item.id,
        producto: producto.item.producto,
        marca: producto.item.marca,
        cantidad: producto.cantidad
       })),
       total: carrito.reduce ((total, producto) => total + producto.item.precio * producto.cantidad, 0),
       nombre,
       apellido,
       telefono,
       email
    };

    addDoc(collection(bd, "ordenes"), orden)
       .then(docRef =>{
        setOrdenId(docRef.id);
        carroVacio();
       })

       .catch(error =>{
        setError("Se produjo un error", error);
       })
    }

    return (
    <div>
        <h2>Checkout</h2>
        <form onSubmit={formHandler}>
           {carrito.map(producto =>(
            <div key={producto.item.id}>
            <p>
             {producto.item.producto} {producto.item.marca} {producto.item.modelo} x {producto.cantidad}   
            </p>
            <p>Precio: ${producto.item.precio}*{producto.cantidad}</p>
            </div>
           )
            )}

            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" value={apellido} onChange={(e)=>setApellido(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Teléfono</label>
                <input type="number" value={telefono} onChange={(e)=> setTelefono(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>


            <div>
                <label htmlFor="">Confirmar email</label>
                <input type="email" value={checkEmail} onChange={(e)=>setCheckEmail(e.target.value)}/>
            </div>

            {error && <p className="error"> {error} </p>}
                <button type="submit">Finalizar compra</button>

        </form>
        {
            ordenId && (
                <strong>¡Gracias por comprar en Dalas Tennis store! Número de orden: {ordenId}</strong>
            )
        }
    </div>
  )
}

export default Checkout