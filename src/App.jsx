
import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <>
  <NavBar/>
  <ItemListContainer greeting= "Bienvenidos a nuestra tienda online"/>
  <ItemDetailContainer/>
  </>
  
  );
}

export default App;
