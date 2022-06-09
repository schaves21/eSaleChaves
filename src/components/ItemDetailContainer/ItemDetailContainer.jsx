import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import imageNike from '../../assets/calzadoNike.png';

const producto = { title: 'Detalle del producto', image: imageNike, description: 'calzado deportivo NIke', price: '$ 3.000' };

const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = new Promise((resolve, rej) => {
      setTimeout(() => {
        resolve(producto);  
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
      <div>{loading && 'Cargando...'}</div>
      <div>{error && 'Hubo un error en el Producto'}</div>
      <ItemDetail data={data} />
    </>
  )
}

export default ItemDetailContainer;