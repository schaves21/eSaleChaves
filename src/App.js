import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/MyComponent/ItemListContainer.jsx';

function App() {
  return (
    <>
      <NavBar /> 
      <ItemListContainer greeting={'Bienvenidos al sitio'} />
    </>
  );
}

export default App;
