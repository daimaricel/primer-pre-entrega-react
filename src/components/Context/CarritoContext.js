import { useState, createContext } from "react";

export const CarroContext = createContext({ 
  carrito: [],
total: 0,
totalItems: 0
});



export const CarroProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal]= useState(0);
  const [totalItems, setTotalItems]= useState(0);

  /* console.log(carrito); */


  const addProducts = (item, cantidad) => {
   
    const hayProducto = carrito.find(prod => prod.item.id === item.id);
    if (!hayProducto) {
      setCarrito(prev => [...prev, { item, cantidad }]);
      setTotalItems(prev => prev + cantidad);
      setTotal(prev => prev + (item.precio * cantidad));
    } else {
      const updateCarro = carrito.map(prod => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCarrito(updateCarro);
      setTotalItems(prev => prev + cantidad);
      setTotal(prev => prev + (item.precio * cantidad));
    }
  };

  const deleteItem = (id) => {
    const itemDeleted= carrito.find (prod =>prod.item.id === id);
    const updateCarro = carrito.filter((prod) => prod.item.id !== id);
    setCarrito(updateCarro);
    setTotalItems(prev =>prev - itemDeleted.cantidad);
    setTotal(prev =>prev - (itemDeleted.item.precio * itemDeleted.cantidad));
  };

  const carroVacio = () => {
    setCarrito([]);
    setTotal(0);
    setTotalItems(0);
  };

  return (
    <CarroContext.Provider value={{ carrito, deleteItem, addProducts, carroVacio, totalItems, total }}>
      {children}
    </CarroContext.Provider>
  );
};
