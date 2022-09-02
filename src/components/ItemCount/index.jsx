import React, { useEffect, useState } from 'react'
import './styles.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(initial);
    
    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
            toast('Producto Agregado', {
                position: "top-right",
                autoClose: 2000,
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
        if((count <= stock) && (count > 0)) {
            setCount(count-1);
            toast('Producto Eliminado', {
                position: "top-right",
                autoClose: 2000,
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

    //Ciclo de vida del hook
    useEffect(()=>{
        // El array esta vacio [] implica que el callback se ejecuta cuando se monta por UNICA VEZ
        console.log("Se monto el ItemCount")
    }, []);

    useEffect(()=>{
        // La funcion callBack dentro del useEffect se ejecutara cuando se MONTE y cuando se Actualice el estado del count
    }, [count]);

    return (
        <div>            
            <h2>{count}</h2>
            <button onClick={handleAdd}>+</button>            
            <button onClick={addCar}>Agregar al Carrito</button>
            <button onClick={handleLess}>-</button>
        </div>
    )
}

export default ItemCount