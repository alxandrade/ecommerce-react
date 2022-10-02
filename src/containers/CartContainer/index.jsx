import React, { useContext } from 'react'
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ordenGenerada from "../../services/generarOrden";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import Swal from "sweetalert2";

const CartContainer = () => {
  const {cart, removeProduct, clearCart, sumaTotalCarrito} = useContext(CartContext);
  const navigate = useNavigate();
  let totalCarrito = sumaTotalCarrito(); 

  const removeCar = (e) => {    
    removeProduct(e.target.value);    
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
  
  const terminarCompra = async () => {
    const importeTotal = sumaTotalCarrito();
    const orden = ordenGenerada(
      "Alejandro Andrade",
      "alejandro@elrincon-verde.com",
      3319926895,
      cart,
      importeTotal
    );
    
    // Generación de la orden de compra
    const docRef = await addDoc(collection(db, "orders"), orden);

    //Actualizamos el stock de los productos vendidos
    cart.forEach(async (productoEnCarrito) => {      
      const productRef = doc(db, "products", productoEnCarrito.id);      
      const productSnap = await getDoc(productRef);      
      await updateDoc(productRef, {
          stock: productSnap.data().stock - productoEnCarrito.cantidad,
      });
    });

    Swal.fire (
      'Gracias por tu Compra',
      `Tu orden de compra es ID: ${docRef.id}`,
      'success'
    );

    cleanAllCart();
  }
  
  if(cart.length < 1){    
    navigate('/');
    return <Link to="/"></Link>
  } else {        
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
          <Button variant="success" onClick={terminarCompra}>Terminar Compra</Button>
        </div>
      </div>
    )
  }
}

export default CartContainer