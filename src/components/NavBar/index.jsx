import React from 'react'
import './styles.css';
import CartWidget from '../CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="menu__principal">
      <h1>EcoTienda</h1>                              
        <nav align="center">            
            <ul class="menu__ul">
                <Link className="menu__li--a" to="/"> <li className="menu__li">Home</li></Link>
                <Link className="menu__li--a" to="/categoria/Barro"><li className="menu__li">Barro</li></Link>
                <Link className="menu__li--a" to="/categoria/Cerámica"><li className="menu__li">Cerámica</li></Link>
                <Link className="menu__li--a" to="/categoria/Fibra Vidrio"><li className="menu__li">Fibra Vidrio</li></Link>
                <Link className="menu__li--a" to="/servicio"><li className="menu__li">Servicios</li></Link>                
                <Link className="menu__li--a" to="/contacto"><li className="menu__li">Contáctanos</li></Link>
                <button id="cesta-carrito"><i><CartWidget/></i><span id="contador-carrito">0</span></button>                
            </ul>
        </nav> 
    </header>
  )
}                         

export default NavBar