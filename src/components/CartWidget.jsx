import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget({ carrito }) {
  return (
    <>
        <ShoppingCartIcon/>
        {carrito}
    </>
  ); 
}

export default CartWidget;
