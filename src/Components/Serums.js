import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Products from "../Products";


function Serums() {
  return (
    <>
    <div>   
      <h1>Serums</h1>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Products.serums.map((serumItem) => (<Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={serumItem.src} />
      <Card.Body>
        <Card.Title>{serumItem.title}</Card.Title>
        <Card.Text>
         {serumItem.description} 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{serumItem.price}</ListGroup.Item>
        <ListGroup.Item>{serumItem.size}</ListGroup.Item>
        <ListGroup.Item>{serumItem.ingridients}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/ProductDetail">Add to cart/Details/Sizes</Card.Link>
      </Card.Body>
    </Card>))}</div></>
  );
}

export default Serums;

    