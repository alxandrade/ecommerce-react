import React from 'react'
import './styles.css';
import CartWidget from '../CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <nav align="center" className="menu__principal">
            <h1>EcoTienda</h1>                              
            <ul class="menu__ul">
                <li className="menu__li"><Link className="menu__li--a" to="/">Home</Link></li>
                {/* <li className="menu__li"><Link className="menu__li--a" to="/#">Categorias</Link></li> */}
                <li className="menu__li"><Link className="menu__li--a" to="Barro">Barro</Link></li>
                <li className="menu__li"><Link className="menu__li--a" to="Cerámica">Cerámica</Link></li>
                <li className="menu__li"><Link className="menu__li--a" to="Fibra Vidrio">Fibra Vidrio</Link></li>
                <li className="menu__li"><Link className="menu__li--a" to="/#">Servicios</Link></li>                
                <li className="menu__li"><Link className="menu__li--a" to="/#">Contáctanos</Link></li>
                <button id="cesta-carrito"><i><CartWidget/></i><span id="contador-carrito">0</span></button>                
            </ul>
        </nav> 
    </div>
  )
}                         

export default NavBar