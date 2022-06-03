import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';

function App() {

  const onAdd = (cantidad) => {
      alert(`Agregaste ${cantidad} productos al carrito`);
  }
  
  return (
    <>
      <NavBar /> 
      <ItemListContainer greeting={'Bienvenidos al sitio'} />
      <ItemCount inicio={1} stock={15} onAdd={onAdd} />
    </>
  );
}

export default App;
