import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Serum1 from "./../pics/Serum1.jpg";
import Serum2 from "./../pics/Serum2.jpg";
import Serum3 from "./../pics/Serum3.jpg";
import Serum4 from "./../pics/Serum4.jpg";
import Serum5 from "./../pics/Serum5.jpg";
import Serum6 from "./../pics/Serum6.jpg";
import Serum7 from "./../pics/Serum7.jpg";
import Serum8 from "./../pics/Serum8.jpg";


function Serums() {
  return (
    <>
    <div>   
      <h1>Serums</h1>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={Serum1} />
      <Card.Body>
        <Card.Title>Revitalizing</Card.Title>
        <Card.Text>
         Reduces wrinkles and repairs elasticity in your skin. 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: $50</ListGroup.Item>
        <ListGroup.Item>Size: 2oz</ListGroup.Item>
        <ListGroup.Item>Ingridients: Rejuvinating Vitamin Blend&trade; </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Add to cart/Details/Sizes</Card.Link>
        {/* <Card.Link href="#">Details/Sizes</Card.Link> */}
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Serum2}/>
      <Card.Body>
        <Card.Title>Pine</Card.Title>
        <Card.Text>
         Tightens, energizes, and reduces dark circles under the eyes.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: $40</ListGroup.Item>
        <ListGroup.Item>Size: 2oz</ListGroup.Item>
        <ListGroup.Item>Ingridients: Pine Oil and vitamins</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Add to cart/Details/Sizes</Card.Link>
        {/* <Card.Link href="#">Details/Sizes</Card.Link> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Serum3} />
      <Card.Body>
        <Card.Title>Energizing</Card.Title>
        <Card.Text>
         This unique blend of rosemary and aloe allows increased blood flow giving you a wonderful glow while hydrating dry skin.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: $60</ListGroup.Item>
        <ListGroup.Item>Size: 3oz</ListGroup.Item>
        <ListGroup.Item>Ingridients: Rosemary and Aloe</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Add to cart/Details/Sizes</Card.Link>
        {/* <Card.Link href="#">Details/Sizes</Card.Link> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={Serum4} />
      <Card.Body>
        <Card.Title>Hydrating Cucumber </Card.Title>
        <Card.Text>
        Hydrates and brightens dull skin!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: $60</ListGroup.Item>
        <ListGroup.Item>Size: 3oz</ListGroup.Item>
        <ListGroup.Item>Ingridients: Orange and grapefruit extract</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Add to cart/Details/Sizes</Card.Link>
        {/* <Card.Link href="#">Details/Sizes</Card.Link> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={Serum5} />
      <Card.Body>
        <Card.Title>Rejuvinating Morning Citrus</Card.Title>
        <Card.Text>
        Nourishes and improves skin texture.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: $50</ListGroup.Item>
        <ListGroup.Item>Size: 2oz</ListGroup.Item>
        <ListGroup.Item>Ingridients: Orange extract</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Add to cart/Details/Sizes</Card.Link>
        {/* <Card.Link href="#">Details/Sizes</Card.Link> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={Serum6} />
      <Card.Body>
        <Card.Title>Rejuvinating Trio </Card.Title>
        <Card.Text>
         Our three most popular serums packed together for you makes a great gift.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: $150</ListGroup.Item>
        <ListGroup.Item>Size: 2oz/ea</ListGroup.Item>
        <ListGroup.Item>Ingridients: See list for details</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Add to cart/Details/Sizes</Card.Link>
        {/* <Card.Link href="#">Details/Sizes</Card.Link> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={Serum7} />
      <Card.Body>
        <Card.Title>Radiant skin serum</Card.Title>
        <Card.Text>
        Radiant skin with refreshing lime and mint.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: $50</ListGroup.Item>
        <ListGroup.Item>Size: 2oz</ListGroup.Item>
        <ListGroup.Item>Ingridients: Lime and mint extract</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Add to cart/Details/Sizes</Card.Link>
        {/* <Card.Link href="#">Details/Sizes</Card.Link> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={Serum8} />
      <Card.Body>
        <Card.Title>Almond Serum</Card.Title>
        <Card.Text>
         Crafted by our organic scientists, this unique blend uses almond extract to tighten and lift.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: $50</ListGroup.Item>
        <ListGroup.Item>Size: 2oz</ListGroup.Item>
        <ListGroup.Item>Ingridients: Almond and vitamin E</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Add to cart/Details/Sizes</Card.Link>
        {/* <Card.Link href="#">Details/Sizes</Card.Link> */}
      </Card.Body>
    </Card>
    </div>
    </>
    
  );
}

export default Serums;