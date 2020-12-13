import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Logo from './logo.jpg';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render (){
    return(
      <div className="Header d-flex flex-sm-row flex-wrap align-items-center w-100 p-2 sticky-top">
        <img src={Logo} alt="Logo Todos Super" className="mr-auto fluid rounded-circle" />
        <Navbar>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/Home">Inicio</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Catalog">Catálogo</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Contact">Contacto</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
