import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";

class Portal extends Component {
  render(){
    return(
      <div>
        <h1 className="text-center m-4">Bienvenido a Todo Super</h1>
        <Container fluid="sm" className="d-sm-flex flex-md-row flex-wrap justify-content-center mb-5">
          <Login />
          <Register />
        </Container>
      </div>
    );
  };
}

export default Portal;