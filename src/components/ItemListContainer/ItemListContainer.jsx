import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';
import imageNike from '../../assets/calzadoNike.png';
import imageAdidas from '../../assets/calzadoAdidas.png';
import imagePuma from '../../assets/calzadoPuma.png';
import imageReebok from '../../assets/calzadoReebok.png';

const productos = [
  { id: 1, title: 'calzado Nike 1', description: 'temporada 2021', price: '$ 3.000', pictureURL: imageNike },
  { id: 2, title: 'calzado Adidas 1', description: 'temporada 2021', price: '$ 3.200', pictureURL: imageAdidas },
  { id: 3, title: 'calzado Puma 1', description: 'temporada 2021', price: '$ 2.500', pictureURL: imagePuma },
  { id: 4, title: 'calzado Reebok 1', description: 'temporada 2021', price: '$ 2.000', pictureURL: imageReebok },
  { id: 5, title: 'calzado Nike 2', description: 'temporada 2020', price: '$ 2.000', pictureURL: imageNike },
  { id: 6, title: 'calzado Adidas 2', description: 'temporada 2020', price: '$ 2.200', pictureURL: imageAdidas },
  { id: 7, title: 'calzado Puma 2', description: 'temporada 2020', price: '$ 1.500', pictureURL: imagePuma },
  { id: 8, title: 'calzado Reebok 2', description: 'temporada 2020', price: '$ 1.000', pictureURL: imageReebok }
] 

const ItemListContainer = ({ greeting }) => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
 
  useEffect(() => {
    const getData = new Promise((resolve, rej) => {
      setTimeout(() => {
        resolve(productos);  
      }, 2000);
    });
    getData.then((res) => {
       setData(res)
    });
    getData.catch((error) => {
      setError(true);
      console.log(error);
    });
    getData.finally(() => {
      setLoading(false);
    });
  }, [])
  
  return (
    <>
      <h1 className='myH1'>{greeting}</h1>;
      <div>{loading && 'Cargando...'}</div>
      <div>{error && 'Hubo un error en los Productos'}</div>
      <ItemList data={data} />
    </>
  )

}

export default ItemListContainer;
