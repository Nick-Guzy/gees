import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Products from "../Products";


function Accessories() {
  return(
    <>
    <div> 
      <h1>Accessories</h1>
    </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Products.accessories.map((accessoryItem) => (<Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={accessoryItem.src} style={{ height: '300px' }} />
        <Card.Body>
          <Card.Title>{accessoryItem.title}</Card.Title>
          <Card.Text>
           {accessoryItem.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{accessoryItem.price}</ListGroup.Item>
          <ListGroup.Item>{accessoryItem.size}</ListGroup.Item>
          <ListGroup.Item>{accessoryItem.ingridients}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href={`/product/${accessoryItem.id}`}>Add to cart/Details/Sizes</Card.Link>
        </Card.Body>
      </Card>))}</div></>
  );
}

export default Accessories;