import React, { useContext } from 'react'
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const CartContainer = () => {
  const {cart, removeProduct, clearCart} = useContext(CartContext);
  const navigate = useNavigate();

  let totalCarrito = cart.reduce((acumulador,el) => acumulador + (el.precioMaceta*el.cantidad),0);  
  totalCarrito = parseFloat(totalCarrito);

  const removeCar = (e) => {    
    removeProduct(e.target.value);
    console.log("Tot", totalCarrito)
    if(totalCarrito > 0){
      navigate('/cart')}
    else {
      navigate('/');
    }
  }

  const cleanAllCart = () => {
    clearCart()
    navigate('/');
  }
  console.log("CART LENGTH", cart.length)
  if(cart.length < 1){
    console.log("MENOR")
    navigate('/');
    return <Link to="/"></Link>
  } else {    
    console.log("MAYOR")
    return (
      <div>
      <Table striped bordered hover size="sm" responsive>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Modelo</th>
            <th>Tipo</th>
            <th>Precio</th>
            <th>Total</th>
            <th></th>
          </tr>      
        </thead>
        <tbody>
        {cart.map(product => {                   
          return (          
            <tr>
              <td width={'1px'}>{product.cantidad}</td>
              <td>{product.modelo}</td>
              <td>{product.tipoMaceta}</td>
              <td>${product.precioMaceta}</td>
              <td>${product.cantidad * product.precioMaceta}</td>
              <td><Button variant="danger" value={product.id} onClick={removeCar}>Eliminar</Button></td>            
            </tr>          
          )
        })      
        }      
        </tbody>              
      </Table>  
        <h3><strong>TOTAL COMPRA: ${totalCarrito}</strong></h3>
        <br></br>
        <div>
          <Button variant="secondary" onClick={cleanAllCart}>Limpiar Carrito</Button>
          <Button variant="success">Terminar Compra</Button>
        </div>
      </div>
    )
  }
}

export default CartContainer