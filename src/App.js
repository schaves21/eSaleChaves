import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';

/*import { BrowserRouter, Routes, Route } from "react-router-dom";*/


function App() {

  const onAdd = (cantidad) => {
      alert(`Agregaste ${cantidad} productos al carrito`);
  }

  return (
    <>
      <NavBar /> 
      { /*<ItemListContainer greeting={'Bienvenidos al sitio'} /> */}
      { /*<ItemDetailContainer /> */}
      <ItemDetailContainer />
      <ItemCount inicio={1} stock={15} onAdd={onAdd} />
    </>
  );
}

export default App;
