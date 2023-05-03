import React from 'react';
// import './App.css';
import Header from './Header';
import SignIn from "./SignIn";
// import ProductControl from "./ProductControl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
   
<Router>
<div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4>React-Bootstrap NavBar Component</h4>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
            alt="Sample Brand Logo"
            width="35"
            className="align-top d-inline-block"
            height="35"
          />Test Company
        </Navbar.Brand>
      </Navbar>
    </div>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        {/* <Route path="/" element={<ProductControl />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
