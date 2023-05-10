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
import FaqSection from "./FAQs";
import Face from "./Face";
import Body from "./Body";
import Serums from "./Serums";
import Accessories from "./Accessories";

function App() {
  return (
    <>
    <div style={{marginBottom: "50px"}}>
    <BrowserRouter>
    {/* <Router> */}
      <Header />
      <NavBar />
      <Routes>
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="about-us" element={<AboutUs />} />
        <Route exact path="contact-us" element={<ContactUs />} />
        <Route exact path="FAQs" element={<FaqSection />} />
        <Route exact path="Face" element={<Face />} />
        <Route exact path="Body" element={<Body />} />
        <Route exact path="Serums" element={<Serums />} />
        <Route exact path="Accessories" element={<Accessories />} />
        {/* <Route path="/" element={<ProductControl />} /> */}
      </Routes>
    {/* </Router> */}
    </BrowserRouter>
    </div>
    <Footer />
    </>
  );
}

export default App;

//useNavigate hook
