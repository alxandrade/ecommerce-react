import React from 'react'
import './styles.css';
import CartWidget from '../CartWidget';

const NavBar = () => {
  return (
    <div>
        <nav align="center" className="menu__principal">
            <h1>EcoTienda</h1>                              
            <ul class="menu__ul">
                <li className="menu__li"><a className="menu__li--a" href="#">Home</a></li>
                <li className="menu__li"><a className="menu__li--a" href="#">Categorias</a></li>
                <li className="menu__li"><a className="menu__li--a" href="#">Servicios</a></li>                
                <li className="menu__li"><a className="menu__li--a" href="#">Contáctanos</a></li>
                <button id="cesta-carrito"><i><CartWidget/></i><span id="contador-carrito">0</span></button>                
            </ul>
        </nav> 
    </div>
  )
}

export default NavBar