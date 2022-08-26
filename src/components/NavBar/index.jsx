import React from 'react'
import './styles.css';

const NavBar = () => {
  return (
    <div>
        <nav align="center" class="menu__principal">
            <h1>EcoTienda</h1>                              
            <ul class="menu__ul">
                <li class="menu__li"><a class="menu__li--a" href="#">Home</a></li>
                <li class="menu__li"><a class="menu__li--a" href="#">Categorias</a></li>
                <li class="menu__li"><a class="menu__li--a" href="#">Servicios</a></li>                
                <li class="menu__li"><a class="menu__li--a" href="#">Contáctanos</a></li>
            </ul>
        </nav> 
    </div>
  )
}

export default NavBar