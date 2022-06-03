import React, {useEffect, useState} from 'react';
import './ItemCount.css';
import Button from '@mui/material/Button';

function ItemCount( {inicio, stock, onAdd } ) {

    const [count, setCount] = useState(parseInt(inicio));

    const restar = () => {
        setCount(count - 1);
    }

    const sumar = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(inicio));
    },[inicio])

    return (
        <div className='contador'>
            <Button variant="contained" color="primary" disabled={count <= 1} onClick={restar}>-</Button>    
            <span className='spanCount'>{count}</span>
            <Button variant="contained" color="primary" disabled={count >= stock} onClick={sumar}>+</Button>
            <div className='agregarCarrito'>
                <Button variant="contained" color="primary" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al Carrito</Button>
            </div>
        </div>
    );   
}

export default ItemCount;
