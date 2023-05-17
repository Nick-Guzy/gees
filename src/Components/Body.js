import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Products from "../Products";

function Body() {
  return (
    <>
    <div> 
      <h1>Body</h1>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {Products.body.map((bodyItem) => (<Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={bodyItem.src} style={{ height: '300px' }} />
      <Card.Body>
        <Card.Title>{bodyItem.title}</Card.Title>
        <Card.Text>
         {bodyItem.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{bodyItem.price}</ListGroup.Item>
        <ListGroup.Item>{bodyItem.size}</ListGroup.Item>
        <ListGroup.Item>{bodyItem.ingridients}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={`/product/${bodyItem.id}`}>Add to cart/Details/Sizes</Card.Link>
      </Card.Body>
    </Card>))}</div></>

  );
}
export default Body;
    
    