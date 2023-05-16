import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FlowerBanner2 from './../pics/FlowerBanner2.jpg'

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/" style={{ fontWeight: 'bold', color: "green" }}><em>Organic Products To Enhance Your Wellbeing</em><img src={FlowerBanner2} alt="FlowerBanner2" width="1100" height="100" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{background: "#283e31"}}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <b>Menu</b>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/sign-in">Sign In</Nav.Link>
                  <NavDropdown
                    title="Menu"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    style={{background: "#283e31"}}
                  >
                   <NavDropdown
                    title="Categories"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    style={{background: "#283e31", color: '#b59f9f'}}
                  ><NavDropdown.Item style={{background: "#283e31", color: '#b59f9f'}} href="/face">Face</NavDropdown.Item>
                  <NavDropdown.Item style={{background: "#283e31", color: '#b59f9f'}} href="/body">Body</NavDropdown.Item>
                  <NavDropdown.Item style={{background: "#283e31", color: '#b59f9f'}} href="/serums">Serums</NavDropdown.Item>
                  <NavDropdown.Item style={{background: "#283e31", color: '#b59f9f'}} href="/accessories">Accessories</NavDropdown.Item>
                  </NavDropdown> 
                    <NavDropdown.Divider />
                    <NavDropdown.Item style={{background: "#283e31", color: '#b59f9f'}} href="/about-us">
                      About Us
                    </NavDropdown.Item>
                    <NavDropdown.Item style={{background: "#283e31", color: '#b59f9f'}} href="/contact-us">
                      Contact Us
                    </NavDropdown.Item>
                    <NavDropdown.Item style={{background: "#283e31", color: '#b59f9f'}} href="/faqs">
                      FAQ's
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;