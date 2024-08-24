import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import './index.css';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/service' element={<Services />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
