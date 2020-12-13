import React from 'react';
import {Form} from 'react-bootstrap';

const Contact = () => {
  return(
    <div className="w-50 mx-auto">
      <h1 className="text-center m-4">Envíanos una consulta</h1>
      <Form className="mt-5 p-4">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Categoría de consulta</Form.Label>
          <Form.Control as="select">
            <option>Cliente</option>
            <option>Proveedor</option>
            <option>DGI</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Consulta</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Contact;