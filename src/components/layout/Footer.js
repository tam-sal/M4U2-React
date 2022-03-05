// import React from 'react';
import {Link} from 'react-router-dom';
const Footer = (props) => {
    return (
    <footer>
      <p>Diseñada por Tamer Saleh - &copy;2022</p>
      
      <div onClick={() => window.location.replace('/#top')}>
        <div className="back-top" title="ir arriba">
          <Link exact to href="Header/#top"><i className="fa fa-angle-up"></i></Link>
        </div>
      </div>
    </footer>);
}
export default Footer;