import React, { useContext, useState } from 'react'
import './styles.css';
import ItemCount from '../ItemCount'
// import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";
import Button from 'react-bootstrap/Button';

const ItemDetail = ({product}) => {

    const [qty, setQty] = useState(0);
    const navigate = useNavigate();
    const {addToCart} = useContext(Shop);

    const agregarAlCarrito = (cantidad) => {        
        setQty(cantidad);
        console.log(cantidad);        
        // Swal.fire({
        //   title: `Se agregaron ${cantidad}  productos al Carrito`,      
        // })
    };

    const finalizarCarrito = () => {
        const productToSave = {...product, cantidad: qty}
        addToCart(productToSave)
        navigate('/cart');
    };

    console.log("Aqui la cantidad");
    console.log(qty);
    
    return (  
        <article className='card-main'>
            
            <div className="card-detail">
                <div className="card-detail-left">
                    <img src={product.rutaImg} className="img-detail" alt="product-detail"/>
                </div>
                <div className="card-detail-right">
                    <h1>{product.modelo}</h1>
                    <p><strong>Tamaño:</strong> {product.tamanoMaceta}</p>
                    <p><strong>Material:</strong> {product.tipoMaceta}</p>
                    <p><strong>Descripción:</strong> {product.descripcion}</p>
                    <p><strong>Stock:</strong> {product.stock}</p>
                    <p><strong>Precio:</strong> ${product.precioMaceta}</p>
                    { qty ? (
                        <Button variant="success" onClick={finalizarCarrito}>Finalizar Compra</Button>                        
                    ) : (
                        <ItemCount initial={1} stock={product.stock} onAdd={agregarAlCarrito} />
                    )}
                </div>
            </div>
        </article>     
    )
}

export default ItemDetail


