// import React from 'react';
import {Link} from 'react-router-dom';
const Nav = (props) => {
    return (
    <nav>
      <ul className="nav-list holder">
        <li className="nav-item home">
            <Link to ="/" exact activeClassName='activo'>Home</Link></li>
        <li className="nav-item nosotros">
          <Link to = '/nosotros'>Nosotros</Link>
        </li>
        <li className="nav-item servicios">
          <Link to = "/servicios">Servicios</Link>
        </li>
        <li className="nav-item galeria">
          <Link to ="/galeria">Galeria</Link>
        </li>
        <li className="nav-item novedades">
          <Link to ="/novedades">Novedades</Link>
        </li>
        <li className="nav-item contacto">
          <Link to = '/contacto'>Contacto</Link>
        </li>
    </ul>
    </nav>);
}
export default Nav;
