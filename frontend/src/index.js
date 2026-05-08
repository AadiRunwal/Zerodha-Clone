import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";    //for creating Routes
import './index.css';
// -------- Landing Page Routes --------
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Homepage from "./landing_page/home/Homepage";
import Signup from "./landing_page/signup/Signup";
import Login from './landing_page/signup/Login';
import About from "./landing_page/about/AboutPage";
import Products from "./landing_page/products/ProductsPage";
import Pricing from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/SupportPage";
import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Products' element={<Products />}></Route>
        <Route path='/Pricing' element={<Pricing />}></Route>
        <Route path='/Support' element={<Support />}></Route>
        <Route path='*' element={<NotFound />}></Route>         
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);
