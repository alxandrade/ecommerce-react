import React, { useState } from 'react'
import './styles.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(initial);
    
    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
            toast('Producto Agregado', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });            
        }
        else {
            Swal.fire({
                title: `No hay suficiente stock`,      
            });            
        }
    }

    const handleLess = () => {
        if(count > initial) {
            setCount(count-1);
            toast('Producto Eliminado', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });      
        }
        else{
            Swal.fire({
                title: `No hay productos en el Carrito`,      
            }); 
        }        
    }

    const addCar = () => {
        onAdd(count);
        setCount(initial);
    }

    return (
        <div className='counter-container'>            
            <h2 className='counter'>{count}</h2>
            <div className='button-container'>
                <button className='button' onClick={handleLess}>-</button>
                <button className='button' onClick={handleAdd}>+</button>                            
            </div>
            <Button variant="success" onClick={addCar}>Agregar al Carrito</Button>            
        </div>
    )
}

export default ItemCount