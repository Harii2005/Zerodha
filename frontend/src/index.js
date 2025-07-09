import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import About from './landing_page/about/AboutPage';
import SignUp from './landing_page/signup/SignUp';
import Support from './landing_page/support/SupportPage';
import Products from './landing_page/products/ProductsPage';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/support' element={<Support/>} />
      <Route path='/products' element={<Products/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>  
);
