import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Products from "../Products";


function Face() {
  return (
    <>
    <div>   
      <h1>Face</h1>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
{Products.faceProducts.map((faceItem) => (<Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={faceItem.src} style={{ height: '300px' }} />
      <Card.Body>
        <Card.Title>{faceItem.title}</Card.Title>
        <Card.Text>
         {faceItem.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{faceItem.price}</ListGroup.Item>
        <ListGroup.Item>{faceItem.size}</ListGroup.Item>
        <ListGroup.Item>{faceItem.ingridients}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/ProductDetail">Add to cart/Details/Sizes</Card.Link>
      </Card.Body>
    </Card>))}</div></>
  );
}

export default Face;