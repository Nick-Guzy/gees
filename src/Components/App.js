import React from "react";
// import './App.css';
import Header from "./Header";
import SignIn from "./SignIn";
// import ProductControl from "./ProductControl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
// import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        {/* <Route path="/" element={<ProductControl />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
