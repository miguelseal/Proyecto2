import React from 'react'; 
import {Card} from 'react-bootstrap';

const Cards = props => {
  const style = {
    width: '20rem',
    boxShadow: '1px 1px 2px black'
  };
  return(
    <Card style={style} className="p-2 m-5">
      <Card.Img className="w-50 mx-auto" variant="top" src={props.Data.URL} />
      <Card.Body>
        <Card.Title className="text-center m-2">{props.Data.Nombre}</Card.Title>
        <Card.Subtitle className="text-center m-2">{props.Data.Tipo}</Card.Subtitle>
        <Card.Text className="p-2 m-2">{props.Data.Descripcion}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;