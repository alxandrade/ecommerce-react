import React, { useContext } from 'react'
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const {cart} = useContext(CartContext);

  return (
    <div>
      {cart.map(product => {                   
        return (          
          <>
            <p>{product.cantidad} - {product.modelo} - ${product.precioMaceta}</p>
            <button>Eliminar</button>         
          </>          
        )
      })      
      }      
    </div>
  )
}

export default CartContainer