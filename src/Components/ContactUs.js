import React from "react";
import Card from 'react-bootstrap/Card';
import FlowerCorner from './../pics/FlowerCorner.jpg';

function ContactUs() {
  return (
    <>
    <div>
      <h2>Contact Us</h2>
      <p>You can reach our offices during regular business hours between 8am and 4:30pm.</p>
      <br />
      <Card border="dark" style={{ width: '18rem' }}>
        <Card.Header>Phone | Email | Fax</Card.Header>
        <Card.Body>
          <Card.Title>Contacts:</Card.Title>
          <Card.Text>
         <b>Phone:</b><p> 1-213-453-7898</p>
         <br />
         <b>Email:</b><p> info@GeesCalmBalm.com</p>
         <br />
         <b>Fax:</b><p> 1-213-453-7988</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <img style={{ float: "right", marginTop: "-560px", width: "40%", height: "40%" }} 
          src= {FlowerCorner} alt='FlowerCorner'></img>
    </div>
    </>
  );
}

export default ContactUs;