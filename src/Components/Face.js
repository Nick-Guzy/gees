import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Cream from "./../pics/Cream.jpg";
import Cream2 from "./../pics/Cream2.jpg";
import Cream3 from "./../pics/Cream3.jpg";
import Cream4 from "./../pics/Cream4.jpg";
import Aloe from "./../pics/Aloe.jpg";
import LotionBlocks from "./../pics/LotionBlocks.jpg";


function Face() {
  return (
    <>
    <div>   
      <h1>Face</h1>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={Cream2} style={{ height: '300px' }} />
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
      <Card.Img variant="top" src={Cream3}/>
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
      <Card.Img variant="top" src={Aloe} />
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
      <Card.Img variant="top" src={Cream} />
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
      <Card.Img variant="top" src={LotionBlocks} />
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
      <Card.Img variant="top" src={Cream4} />
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
    </div>
    </>
    
  );
}

export default Face;