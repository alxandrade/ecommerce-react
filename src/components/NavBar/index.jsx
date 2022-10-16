import React, { useContext } from 'react'
import './styles.css';
import CartWidget from '../CartWidget';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const NavBar = () => {
  const {qty, sumaCantidadCarrito} = useContext(CartContext);
  sumaCantidadCarrito();
  return (
    <header className="menu__principal">
      <h1>EcoTienda</h1>                              
        <nav align="center">            
            <ul class="menu__ul">
                <Link className="menu__li--a" to="/"> <li className="menu__li">Home</li></Link>
                <Link className="menu__li--a" to="/categoria/Barro"><li className="menu__li">Barro</li></Link>
                <Link className="menu__li--a" to="/categoria/Cerámica"><li className="menu__li">Cerámica</li></Link>
                <Link className="menu__li--a" to="/categoria/Fibra Vidrio"><li className="menu__li">Fibra Vidrio</li></Link>
                <Link className="menu__li--a" to="/servicios"><li className="menu__li">Servicios</li></Link>                
                <Link className="menu__li--a" to="/contacto"><li className="menu__li">Contáctanos</li></Link>                
                <Link className="menu__li--a" to={qty ? "/cart" : "/"}><button id="cesta-carrito"><i><CartWidget/></i><span id="contador-carrito">{qty}</span></button></Link>                                
            </ul>
        </nav> 
    </header>
  )
}                         

export default NavBar