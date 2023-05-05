import React from "react";
import '../App.css';
import Header from "./Header";
import SignIn from "./SignIn";
import AboutUs from "./AboutUs";
// import ProductControl from "./ProductControl";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "react-bootstrap/Navbar";
import Footer from "./Footer";
import ContactUs from "./ContactUs";

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Router> */}
      <Header />
      <NavBar />
      <Routes>
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="about-us" element={<AboutUs />} />
        <Route exact path="contact-us" element={<ContactUs />} />
        {/* <Route path="/" element={<ProductControl />} /> */}
      </Routes>
    {/* </Router> */}
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;

//useNavigate hook
