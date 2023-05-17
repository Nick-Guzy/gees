import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Body() {
  return(
    <>
    <div> 
      <h1>Body</h1>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={BoCR1} style={{ height: '300px' }} />
      <Card.Body>
        <Card.Title>Rejuvinating Morning Citrus</Card.Title>
        <Card.Text>
         This lightweight cream wil leave you feeling hydrated and energized!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: $20</ListGroup.Item>
        <ListGroup.Item>Size: 10oz</ListGroup.Item>
        <ListGroup.Item>Ingridients: Orange and grapefruit extract</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/">Add to cart/Details/Sizes</Card.Link>
        {/* <Card.Link href="#">Details/Sizes</Card.Link> */}
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={BoCR2}/>
      <Card.Body>
        <Card.Title>Calming Hydration Balm</Card.Title>
        <Card.Text>
         This balm is a rich extra moisturizing balm for extra dry skin.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: $20</ListGroup.Item>
        <ListGroup.Item>Size: 10oz</ListGroup.Item>
        <ListGroup.Item>Ingridients: Shea butter</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/">Add to cart/Details/Sizes</Card.Link>
        {/* <Card.Link href="#">Details/Sizes</Card.Link> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={BoCR3} />
      <Card.Body>
        <Card.Title>Rich Moisturizing Cream</Card.Title>
        <Card.Text>
         This balm is a rich extra moisturizing balm for extra dry skin.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: $20</ListGroup.Item>
        <ListGroup.Item>Size: 10oz</ListGroup.Item>
        <ListGroup.Item>Ingridients: Shea butter</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/">Add to cart/Details/Sizes</Card.Link>
        {/* <Card.Link href="#">Details/Sizes</Card.Link> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={BoCR4} />
      <Card.Body>
        <Card.Title>Calming Hydration Balm</Card.Title>
        <Card.Text>
         This balm is a rich extra moisturizing balm for extra dry skin.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: $20</ListGroup.Item>
        <ListGroup.Item>Size: 10oz</ListGroup.Item>
        <ListGroup.Item>Ingridients: Shea butter</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/">Add to cart/Details/Sizes</Card.Link>
        {/* <Card.Link href="#">Details/Sizes</Card.Link> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={BoCR5} />
      <Card.Body>
        <Card.Title>Calming Hydration Balm</Card.Title>
        <Card.Text>
         This balm is a rich extra moisturizing balm for extra dry skin.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: $20</ListGroup.Item>
        <ListGroup.Item>Size: 10oz</ListGroup.Item>
        <ListGroup.Item>Ingridients: Shea butter</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/">Add to cart/Details/Sizes</Card.Link>
        {/* <Card.Link href="#">Details/Sizes</Card.Link> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={BoCR6} />
      <Card.Body>
        <Card.Title>Calming Hydration Balm</Card.Title>
        <Card.Text>
         This balm is a rich extra moisturizing balm for extra dry skin.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: $20</ListGroup.Item>
        <ListGroup.Item>Size: 10oz</ListGroup.Item>
        <ListGroup.Item>Ingridients: Shea butter</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/">Add to cart/Details/Sizes</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={BoCR7} />
      <Card.Body>
        <Card.Title>Calming Hydration Balm</Card.Title>
        <Card.Text>
         This balm is a rich extra moisturizing balm for extra dry skin.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: $20</ListGroup.Item>
        <ListGroup.Item>Size: 10oz</ListGroup.Item>
        <ListGroup.Item>Ingridients: Shea butter</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/">Add to cart/Details/Sizes</Card.Link>
      </Card.Body>
    </Card>
    </div>
    </>
    
  );
}

export default Body;