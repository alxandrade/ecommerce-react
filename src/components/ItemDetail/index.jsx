import React, { useContext, useState } from 'react'
import './styles.css';
import ItemCount from '../ItemCount'
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Button from 'react-bootstrap/Button';


const ItemDetail = ({product}) => {

    const [qty, setQty] = useState(0);
    const navigate = useNavigate();
    const {addItem} = useContext(CartContext);

    const agregarAlCarrito = (cantidad) => {        
        setQty(cantidad);                
    };

    const finalizarCarrito = () => {
        const productToSave = {...product, cantidad: qty};
        addItem(productToSave);        
        navigate('/cart');
    };
    
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
                        <ItemCount initial={1} stock={product.stock} onAdd={agregarAlCarrito} product={product} />
                    )}
                </div>
            </div>
        </article>     
    )
}

export default ItemDetail


