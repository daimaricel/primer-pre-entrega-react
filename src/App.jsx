import "./App.css";
import NavBar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarroProvider } from "./components/Context/CarritoContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
      <CarroProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCat" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path= "*" element = {<h1>¡Lo sentimos! Sitio en Construcción.</h1>}/>
          <Route path= "/cart" element = {<Cart/>} />
        </Routes>
        </CarroProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
