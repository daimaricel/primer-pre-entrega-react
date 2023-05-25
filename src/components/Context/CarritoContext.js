import { useState, createContext } from "react";

export const CarroContext = createContext({ carrito: [] });

export const CarroProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
 
  console.log(carrito);

  const addProducts = (item, cantidad) => {
   
    const hayProducto = carrito.find(prod => prod.item.id === item.id);
    if (!hayProducto) {
      setCarrito(prev => [...prev, { item, cantidad }]);
    } else {
      const updateCarro = carrito.map(prod => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCarrito(updateCarro);
    }
  };

  const deleteItem = (id) => {
    const updateCarro = carrito.filter((prod) => prod.id !== id);
    setCarrito(updateCarro);
  };

  const carroVacio = () => {
    setCarrito([]);
  };
  return (
    <CarroContext.Provider value={{ carrito, deleteItem, addProducts, carroVacio }}>
      {children}
    </CarroContext.Provider>
  );
};
