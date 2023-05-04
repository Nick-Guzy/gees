import React from "react";
import '../App.css';
import Header from "./Header";
import SignIn from "./SignIn";
// import ProductControl from "./ProductControl";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "react-bootstrap/Navbar";

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Router> */}
      <Header />
      <NavBar />
      <Routes>
        <Route exact path="/sign-in" element={<SignIn />} />
        {/* <Route path="/" element={<ProductControl />} /> */}
      </Routes>
    {/* </Router> */}
    </BrowserRouter>
    </>
  );
}

export default App;

//useNavigate hook
