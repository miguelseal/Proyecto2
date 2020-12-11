import React, {Component} from "react";
import {Form, Button} from "react-bootstrap";

class Login extends Component {
  render(){
    return (
      <div className="mt-4 mx-auto p-4 border rounded">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
          <Button className="d-block mx-auto mt-5 bg-success border-success" variant="primary" type="submit">
            Ingresar
          </Button>
        </Form>
      </div>
    );
  };
}

export default Login;